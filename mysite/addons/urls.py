
from django.contrib.auth.decorators import login_required
from django.urls import path
from django.contrib.auth.views import LogoutView

from addons.views import *

app_name = 'addons'

urlpatterns = [
    path('', AddonsView.as_view(), name='shop'),
    path('category=<int:category_id>/', AddonsView.as_view(), name='category'),
]

