from django.shortcuts import render,redirect
from .models import *
import requests
from django.http import JsonResponse,HttpResponseRedirect, HttpResponse

# Create your views here.

def main(request):
    langs = Lang.objects.all()
    project = Project.objects.all()
    return render(request,"pages/index.html",{
        "items": langs,
        "projects": project,
    })

def contact(request):
    return render(request,"pages/contact.html")

def sendform(request):
    if request.method == "POST":
        my_full_name = request.POST["fname"]
        my_subject = request.POST["subject"]
        my_gmail = request.POST["email"]
        my_description = request.POST["message"]

        create_obj = Contact.objects.create(full_name=my_full_name, subject=my_subject, gmail=my_gmail, description=my_description)
        return HttpResponseRedirect("/")

    return HttpResponse("something went wrong")
