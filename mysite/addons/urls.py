
from django.contrib.auth.decorators import login_required
from django.urls import path
from django.contrib.auth.views import LogoutView

from addons.views import *

app_name = 'addons'

urlpatterns = [
    path('', AddonsView.as_view(), name='shop'),
    path('category=<int:category_id>/', AddonsView.as_view(), name='category'),
    path('<str:addon_slug>', AddonPageView.as_view(), name='AddonPage'),
    path('payment-alerts/', payment_alerts, name='payment_alerts'),
    path('successfully/', PaymentSuccess.as_view(), name='payment_success'),
    path('failed/', PaymentFailed.as_view(), name='payment_failed'),
]

