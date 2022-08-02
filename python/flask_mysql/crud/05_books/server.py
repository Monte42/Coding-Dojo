from books_app import app
from books_app.controllers import authors,books, users, favorites


if __name__ == '__main__':
    app.run(debug=True)