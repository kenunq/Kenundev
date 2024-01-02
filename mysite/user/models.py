from django.db import models

from django.contrib.auth.models import AbstractUser


# Create your models here.

class User(AbstractUser):
	discord = models.CharField(max_length=32, null=True, verbose_name='Discord')