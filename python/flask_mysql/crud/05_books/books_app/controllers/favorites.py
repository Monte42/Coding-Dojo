from books_app import app
from flask import redirect, request

from books_app.models import favorite

@app.route('/new_favorite', methods=["POST"])
def create_new_fav():
    data = {
        'book_id': request.form['book_id'],
        'user_id': request.form['user_id']
    }
    favorite.Favorite.create_new_favorite(data)
    return redirect(f'/books/{data["book_id"]}')