from django.db import models


class Profile(models.Model):
    name = models.CharField(max_length=50)
    img = models.ImageField(upload_to='Profiles/imgs/')
    github = models.URLField(default='https://github.com/')
    organization = models.URLField(default='https://github.com/', null=True, blank=True)
    discord_webhook = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.name


class Lang(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    img = models.ImageField(upload_to="Profiles/Lang/img/")
    description = models.TextField()

    def __str__(self):
        return self.name


class Project(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    img = models.ImageField(upload_to="Profiles/Projects/img/")
    description = models.TextField()
    git = models.URLField(default="https://github.com/", null=True, blank=True)

    def __str__(self):
        return self.name

