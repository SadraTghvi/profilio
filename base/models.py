from django.db import models

# Create your models here.

class Lang(models.Model):
    title = models.CharField(max_length=50)
    image = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.title

class Project(models.Model):
    title = models.CharField(max_length=50)
    image = models.CharField(max_length=200)
    description = models.TextField()
    link = models.CharField(max_length=200,null=False,default="https://github.com/SadraTghvi")

    def __str__(self):
        return self.title

class Contact(models.Model):
    name = models.CharField(max_length=100,blank=False,null=False)
    lname = models.CharField(max_length=100, blank=False, null=False)
    gmail = models.EmailField(max_length=254)
    description = models.TextField(default=" ")

