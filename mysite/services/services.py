import threading
import telebot

bot = telebot.TeleBot('6929955302:AAHZGMlL0tYSb0YElMEjiKSe9APIBIjYwtY')


@bot.message_handler(content_types=['text'])
def get_text_messages(message):
    if message.text == "Привет":
        bot.send_message(message.from_user.id, f"Привет, чем я могу тебе помочь?{message.chat.id}")
    elif message.text == "/help":
        bot.send_message(message.from_user.id, "Напиши привет")
    else:
        bot.send_message(message.from_user.id, "Я тебя не понимаю. Напиши /help.")


def send_message_zapis(telegram_id, data):
    bot.send_message(telegram_id, f"Тип: {data['type']} \n"
                                  f"Сервер: {data['server']} \n"
                                  f"Фракция: {data['fraction']} \n"
                                  f"Класс: {data['class']} \n"
                                  f"Учитель: {data['mentor']} \n"
                                  f"Способ связи: {data['communication']} \n"
                                  f"Ник: {data['username']} \n"
                                  f"Комментарий: {data['comment']}")
    # bot.send_message(723479509, f"Сенсей: {text}") # ->Бонжур


class AsyncActionGetGameChatData(threading.Thread):
    '''Класс работающий не в основном потоке, который отправляет меседж в телеграм'''

    def run(self):
        bot.polling(none_stop=True, interval=0)


#создаем экземпляр класса отправки меседжей
async_action_get_game_chat_data = AsyncActionGetGameChatData()
print(22222)
async_action_get_game_chat_data.start()

