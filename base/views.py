from django.shortcuts import render
from .models import *
import requests
from django.http import JsonResponse

# Create your views here.

def main(request):
    langs = Lang.objects.all()
    project = Project.objects.all()
    return render(request,"pages/index.html",{
        "items": langs,
        "projects": project,
    })
