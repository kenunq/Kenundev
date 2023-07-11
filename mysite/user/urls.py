from django.contrib.auth.decorators import login_required
from django.urls import path

from user.views import *

app_name = 'user'

urlpatterns = [
    #path('login/', UserLoginView.as_view(), name='login'),
    path('registration/', RegistrationView.as_view(), name='registration'),
]