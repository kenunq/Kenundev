from django.db import models

from user.models import User


# Create your models here.


class TalentsModel(models.Model):
    name = models.CharField(max_length=32, verbose_name='Название талантов')
    url = models.URLField(max_length=250)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, null=True,
                                verbose_name='Создатель талантов')
    talent_class = models.CharField(max_length=32, verbose_name='Класс', default='')
    talent_spec = models.CharField(max_length=128, verbose_name='Путь до изображения спецификации', default='')

    class Meta:
        verbose_name = 'Талантам'
        verbose_name_plural = 'Таланты'

    def __str__(self):
        return 'Название: ' + self.name