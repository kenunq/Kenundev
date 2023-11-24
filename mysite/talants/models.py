from django.db import models

from CharPage.models import CharModel


# Create your models here.


class TalentsModel(models.Model):
    name = models.CharField(max_length=32, verbose_name='Название талантов')
    char = models.ForeignKey(CharModel, on_delete=models.CASCADE, null=True, verbose_name='Привязанные персонажи')
    url = models.URLField(max_length=250)