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
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from HomePage.views import *
from user.views import *
from CharPage.views import *
from talants.views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', HomePageView.as_view(), name='home'),
    path('user/', include('user.urls', namespace='user')),
    path('addons/', include('addons.urls', namespace='addons')),
    path('char/', CharPageView.as_view(), name='char'),
    path('charlist/', CharListPageView.as_view(), name='char_list'),
    path('createchar/<uuid:room_id>/', CreateCharView.as_view(), name='createchar'),
    path('char/<uuid:room_id>/', UniqueCharPageView.as_view(), name='char_page_room'),
    path('testanim/', TestAnim.as_view(), name='testanim'),
    path('talents/', TalantsView.as_view(), name='talants'),
    path('api/modelviewer/<path:modelviewer_path>/', ZamimgProxyView.as_view(), name='zamimg_proxy'),
]

if settings.DEBUG == True:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
