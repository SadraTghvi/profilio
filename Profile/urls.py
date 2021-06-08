from django.urls import path

from .views import profile, langs, projects, toggleTheme

urlpatterns = [
    path('', profile, name='Profile'),
    path('langs/', langs, name='Langs'),
    path('projects/', projects, name='Projects'),
    path('theme/', toggleTheme, name='Theme'),
]
