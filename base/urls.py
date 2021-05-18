from . import views
from django.urls import path, include


urlpatterns = [
    path("",views.main,name="main"),
    path("contactus/", views.contact, name="contact"),
    path("sendform/", views.sendform, name="sendForm"),
]

