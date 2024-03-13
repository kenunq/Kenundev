from django.core.cache import cache
from django.db import models

from django.contrib.auth.models import AbstractUser
from django.utils import timezone


# Create your models here.


class User(AbstractUser):
    discord = models.CharField(max_length=32, null=True, verbose_name="Discord")

    def is_online(self) -> bool:
        last_seen = cache.get(f"last-seen-{self.id}")
        if last_seen is not None and timezone.now() < last_seen + timezone.timedelta(
            seconds=300
        ):
            return True
        return False
