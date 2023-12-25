import mimetypes

from django.conf import settings
from django.core.mail import EmailMultiAlternatives


def send_problem(files, text):

    message = EmailMultiAlternatives(
        subject="Пользователь нашел проблему на сайте",
        body=text,
        from_email=settings.EMAIL_HOST_USER,
        to=["zabaluev-i-s@yandex.ru"],
    )
    if files:
        for file in files:
            message.attach(file, files[file][0], files[file][1])

    message.send(fail_silently=False)
