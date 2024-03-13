from django.db import models

from user.models import User

# Create your models here.

STATE_ICON_ID = {
    0: "static/img/other/denied.png",
    1: "static/img/other/confirm.png",
    2: "static/img/other/at_work.png",
    3: "static/img/other/new_message.png",
    4: "static/img/other/warning.png",
}


class Message(models.Model):
    # chat_room = models.ForeignKey(ChatRoom, on_delete=models.CASCADE, verbose_name='Привязанная комната')
    body = models.TextField(max_length=300, verbose_name="Текст сообщения")
    user_id = models.CharField(max_length=37, verbose_name="ID отправителя")
    sended_time = models.CharField(max_length=6, verbose_name="Время отправления")

    def __str__(self):
        return f"{self.user_id}"


class ChatRoom(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, verbose_name="Создатель комнаты"
    )
    messages = models.ManyToManyField(Message, null=True, blank=True)
    # last_message = models.CharField(max_length=300, null=True, verbose_name='Последнее сообщение',
    #                                 help_text='Устанавливается автоматически')
    CHAT_STATE = (
        ("0", "Отказано"),
        ("1", "Помощь предоставлена"),
        ("2", "В работе"),
        ("3", "Новое сообщение"),
        ("4", "Срочно"),
    )
    state = models.CharField(
        choices=CHAT_STATE, default=3, verbose_name="Состояние чата"
    )
    slug = models.SlugField(
        max_length=50, unique=True, db_index=True, verbose_name="Слаг", default=""
    )

    def get_status_icon(self) -> str:
        """Возвращает путь до иконки состояния чата"""
        return STATE_ICON_ID[int(self.state)]

    def __str__(self):
        return f"Чат {self.user} с тех. поддержкой"
