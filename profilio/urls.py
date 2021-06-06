from django.contrib import admin
from django.urls import path, include

from django.conf.urls.static import static
from django.conf import settings

from django.views.generic import TemplateView


urlpatterns = static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + [
    path('api/profile/', include('Profile.urls')),
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('<path:resource>', TemplateView.as_view(template_name='index.html')),
]
