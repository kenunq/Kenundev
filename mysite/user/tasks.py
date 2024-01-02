from django.conf import settings
from django.core.mail import send_mail

from mysite.celery import app

@app.task
def send_update_email_message(user_email, current_site, activation_url):
    send_mail(
        'Подтвердите смену электронной почты',
        f'Пожалуйста, перейдите по следующей ссылке, чтобы изменить свой адрес электронной почты: http://{current_site}{activation_url}',
        settings.EMAIL_HOST_USER,
        (user_email,),
        fail_silently=False,
    )