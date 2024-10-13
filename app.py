from flask import Flask, render_template, request  # Импортируйте request
import logging  # Импортируйте модуль для логирования

app = Flask(__name__)

# Настройка логирования (опционально)
logging.basicConfig(level=logging.INFO)

@app.route('/')
def home():
    user_ip = request.remote_addr  # Получаем IP-адрес пользователя
    logging.info(f'User IP: {user_ip}')  # Логируем IP-адрес
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about.html')

# Убедитесь, что этот блок не закомментирован при запуске локально
if __name__ == '__main__':
    app.run(debug=True)  # Запустите приложение с отладкой
