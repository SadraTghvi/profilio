from django.shortcuts import render
from .models import *
import requests
from django.http import JsonResponse

# Create your views here.

def main(request):
    req = requests.get("https://api.github.com/users/SadraTghvi/repos")
    if req.status_code == 200:
        return JsonResponse({"x": req.json()})
    langs = Lang.objects.all()
    project = Project.objects.all()
    return render(request,"pages/index.html",{
        "items": langs,
        "projects": project,
    })

'''
await octokit.request('GET /repos/{owner}/{repo}', {
  owner: 'octocat',
  repo: 'hello-world'
})
'''


