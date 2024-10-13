from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

# Удалите этот блок для запуска с gunicorn
# if __name__ == '__main__':
#     app.run(debug=True)

@app.route('/')
def home():
    user_ip = request.remote_addr  # Получаем IP-адрес пользователя
    print(f'User IP: {user_ip}')  # Печатаем IP-адрес в консоли
    return render_template('index.html')
