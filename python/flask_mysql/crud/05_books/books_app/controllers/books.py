from books_app import app, parse_list
from flask import render_template, redirect, request

from books_app.models import book, author, user

@app.route('/books', methods=['GET','POST'])
def show_all_books():
    if request.method == 'GET':
        books_and_authors = book.Book.get_all_books()
        authors = author.Author.get_all_authors()
        return render_template('all_books.html', books=books_and_authors,authors=authors)
    data = {
        'author_id': request.form['author_id'],
        'title': request.form['title'],
        'num_of_pages': request.form['num_of_pages']
    }
    book.Book.create_new_book(data)
    return redirect(f'/books')

@app.route('/books/<id>')
def show_who_liked_book(id):
    data = {'id':id}
    page = 'book'
    result = book.Book.get_all_who_liked_book(data)
    users = user.User.get_all_users()
    users_who_liked_book = parse_list(result.favorites, 'user_id')
    return render_template('show_all.html',book=result,page=page,users=users,users_who_liked_book=users_who_liked_book)
