"""
URL configuration for mysite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.template.defaulttags import url
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve

from HomePage.views import *
from user.views import *
from CharPage.views import *
from talants.views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', HomePageView.as_view(), name='home'),
    path('user/', include('user.urls', namespace='user')),
    path('support/', include('support.urls', namespace='support')),
    path('addons/', include('addons.urls', namespace='addons')),
    path('services/', include('services.urls', namespace='services')),
    path('char/', CharPageView.as_view(), name='char'),
    path('charlist/', CharListPageView.as_view(), name='char_list'),
    path('createchar/<uuid:room_id>/', CreateCharView.as_view(), name='createchar'),
    path('char/<uuid:room_id>/', UniqueCharPageView.as_view(), name='char_page_room'),
    path('talents/', TalantsView.as_view(), name='talants'),
    path('api/modelviewer/<path:modelviewer_path>/', ZamimgProxyView.as_view(), name='zamimg_proxy'),
    re_path(f"flower/(?P<path>.*)", flower_proxy_view,
            name='flower'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
else:
    urlpatterns += [
       re_path(f'^{settings.MEDIA_URL.lstrip("/")}(?P<path>.*)$',
            serve, {'document_root': settings.MEDIA_ROOT}),
        re_path(f'^{settings.STATIC_URL.lstrip("/")}(?P<path>.*)$',
            serve, {'document_root': settings.STATIC_ROOT}),
    ]

handler400 = 'HomePage.views.bad_request'
handler403 = 'HomePage.views.permission_denied'
handler404 = 'HomePage.views.page_not_found'
handler500 = 'HomePage.views.server_error'