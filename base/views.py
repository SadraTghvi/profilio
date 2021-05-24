import requests

from django.shortcuts import render, redirect

from django.http import JsonResponse, HttpResponseRedirect, HttpResponse
from django.views.decorators.http import require_POST
from django.core.validators import EmailValidator
from django.core.exceptions import ValidationError

from .models import *


def main(request):
    langs = Lang.objects.all()
    project = Project.objects.all()
    return render(request, "pages/index.html", {
        "items": langs,
        "projects": project,
    })


def contact(request):
    return render(request,"pages/contact.html")


@require_POST
def sendform(request):
    full_name = request.POST.get("fname")
    subject = request.POST.get("subject")
    email = request.POST.get("email")
    description = request.POST.get("message")

    if full_name and subject and email and description:
        try:
            ev = EmailValidator()
            ev(email)
        except ValidationError:
            return HttpResponse("enter a valid email")

        ct = Contact(full_name=full_name, subject=subject, email=email, description=description)
        ct.save()
        return HttpResponseRedirect("/")
    else:
        return HttpResponse("All fields are Required")



def theme(r):
    if r.method == 'POST':
        theme = r.POST.get('theme')
        if theme == 'dark' or theme == 'light':
            r.session['theme'] = theme

    return JsonResponse({f'theme': r.session.get('theme')})