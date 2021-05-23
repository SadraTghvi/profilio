from django.db import models

# Create your models here.

class Lang(models.Model):
    title = models.CharField(max_length=50)
    image = models.ImageField(upload_to="lang/")
    description = models.TextField()

    def __str__(self):
        return self.title

class Project(models.Model):
    title = models.CharField(max_length=50)
    image = models.ImageField(upload_to="projects/")
    description = models.TextField()
    link = models.URLField(max_length=300, default="https://github.com/SadraTghvi")

    def __str__(self):
        return self.title

class Contact(models.Model):
    full_name = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    email = models.EmailField()
    description = models.TextField()

    def __str__(self):
        return self.full_name

