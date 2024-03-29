# Generated by Django 4.2.1 on 2024-01-23 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('support', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.TextField(max_length=300, verbose_name='Текст сообщения')),
                ('user_id', models.CharField(max_length=37, verbose_name='ID отправителя')),
                ('sended_time', models.CharField(max_length=6, verbose_name='Время отправления')),
            ],
        ),
        migrations.RemoveField(
            model_name='chatroom',
            name='history',
        ),
        migrations.AddField(
            model_name='chatroom',
            name='slug',
            field=models.SlugField(default='', unique=True, verbose_name='Слаг'),
        ),
        migrations.AddField(
            model_name='chatroom',
            name='messages',
            field=models.ManyToManyField(blank=True, to='support.message'),
        ),
    ]
