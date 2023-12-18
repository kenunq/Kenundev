
from mysite.celery import app
from services.services import send_message_zapis


@app.task
def send_telegram_message(telegram_id, data):
    send_message_zapis(telegram_id, data)
