from django.shortcuts import render
from .models import *

# Create your views here.

def main(request):
    item = lang.objects.all()
    return render(request,"pages/index.html",{
        "items" : item,
    })
