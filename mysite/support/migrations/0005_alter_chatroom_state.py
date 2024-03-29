# Generated by Django 4.2.1 on 2024-01-24 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('support', '0004_remove_chatroom_last_message_alter_chatroom_state'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chatroom',
            name='state',
            field=models.CharField(choices=[('0', 'Отказано'), ('1', 'Помощь предоставлена'), ('2', 'В работе'), ('3', 'Новое сообщение'), ('4', 'Срочно')], default=3, verbose_name='Состояние чата'),
        ),
    ]
