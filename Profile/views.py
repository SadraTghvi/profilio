import json, time, requests

from django.db.models.signals import pre_delete
from django.dispatch import receiver
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_GET, require_POST

from .models import Profile, Lang, Project


def BodyLoader(body):
    try:
        return json.loads(body)
    except Exception:
        return {}


@require_GET
def profile(r):
    p = Profile.objects.all().last()

    pf = None

    if p:
        pf = {
            'name': p.name,
            'img': p.img.url,
            'github': p.github,
            'organization': p.organization,
        }

    return JsonResponse({'profile': pf})


@require_GET
def langs(r):
    p = Profile.objects.all().last()
    l = Lang.objects.filter(profile=p)

    lg = []

    for pl in l:
        lg.append({
            'name': pl.name,
            'img': pl.img.url,
            'description': pl.description
        })
    
    return JsonResponse({'langs': lg})


@require_GET
def projects(r):
    p = Profile.objects.all().last()
    pj = Project.objects.filter(profile=p)

    pjs = []

    for pp in pj:
        pjs.append({
            'name': pp.name,
            'img': pp.img.url,
            'description': pp.description,
            'git': pp.git
        })
    
    return JsonResponse({'projects': pjs})


@require_POST
def toggleTheme(r):
    if not r.session.get('theme'):
        r.session['theme'] = 'light'
    
    data = {}

    if r.POST:
        data = r.POST
    elif r.body:
        try:
            data = json.loads(r.body)
        except Exception:
            pass
    

    if data.get('toggle'):
        if r.session.get('theme') == 'light':
            r.session['theme'] = 'dark'
        else:
            r.session['theme'] = 'light'
    
    return JsonResponse({'theme': r.session.get('theme')})



@require_POST
def send_contact(r):
    last_request = r.session.get('last-request')

    if last_request:
        if last_request > int(time.time()):
            return JsonResponse({'error': '1 message pre hours'}, status=403)

    data = {}

    if r.POST:
        data = r.POST
    elif r.body:
        data = BodyLoader(r.body)
    
    if not data.get('name') or not data.get('mail') or not data.get('msg'):
        return JsonResponse({'error':'value error'}, status=400)
    
    p = Profile.objects.all().last()

    if not p:
        return JsonResponse({'error': 'no profile'}, status=404)
    
    if not p.discord_webhook:
        return JsonResponse({'error': 'no webhook'}, status=404)
    
    res = requests.post(p.discord_webhook, json={
        'username': 'Contact',
        'avatar_url':'https://cdn.discordapp.com/attachments/731174051170746500/851794441593552926/1622826298059_copy.png',
        'embeds': [{
            'title': data.get('name') or 'No Name',
            'description': f'{data.get("mail")}\n```{data.get("msg")}```',
            'color': 16690889,
        }]
    })

    r.session['last-request'] = int(time.time()) + 3600

    return JsonResponse({'status':'sended'}, status=res.status_code)




@receiver(pre_delete, sender=Profile)
@receiver(pre_delete, sender=Lang)
@receiver(pre_delete, sender=Project)
def delete_images(sender, instance, **kwargs):
    instance.img.storage.delete(instance.img.name)
