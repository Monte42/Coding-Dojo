from users_app import app
from users_app.controllers import users, motorcycles

if __name__ == '__main__':
    app.run(debug=True)