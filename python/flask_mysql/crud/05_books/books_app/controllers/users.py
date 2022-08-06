from books_app import app, parse_list
from books_app.models import user, book
from flask import render_template, redirect, request

@app.route('/users', methods=['GET', 'POST'])
def show_users():
    if request.method == 'GET':
        users = user.User.get_all_users()
        return render_template('all_users.html', users = users)
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name']
    }
    new_user = user.User.create_new_user(data)
    return redirect(f"/users/{new_user}")

@app.route('/users/<id>')
def show_user_favs(id):
    data = {'id':id}
    result = user.User.get_user_favorite_books(data)
    books = book.Book.get_all_books()
    books = parse_list(books,result.favorites)
    return render_template('show_all.html',user=result,books=books)
