import json

from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_GET, require_POST

from .models import Profile, Lang, Project


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

