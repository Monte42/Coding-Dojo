from books_app import app
from flask import render_template,redirect,request
from books_app.models import author

@app.route('/authors', methods=["GET","POST"])
def show_authors():
    if request.method == "GET":
        authors = author.Author.get_all_authors()
        return render_template('all_authors.html', authors=authors)
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name']
    }
    author.Author.create_new_author(data)
    return redirect(f'/authors')

@app.route('/authors/<id>')
def show_author(id):
    data = {'id':id}
    page = 'author'
    result = author.Author.get_author_and_books(data)
    return render_template('show_all.html',author=result,page=page,num_of_books=len(result.books))

