from users_app import app
from flask import render_template, redirect, request, session, flash
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from users_app.models import user



@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'GET':
        return render_template('login.html')
    this_user = user.User.get_user_by_username(request.form)
    if not this_user:
        flash('Invalid Username/Password..')
        return redirect('/login')
    if not bcrypt.check_password_hash(this_user.password, request.form['password']):
        flash('Invalid Username/Password..')
        return redirect('/login')
    session['user_id'] = this_user.id
    return redirect('/')

@app.route('/logout')
def logut():
    session.clear()
    return redirect('/login')

@app.route('/register', methods=["GET", "POST"])
def create_user_page():
    if request.method == "GET":
        return render_template('registration_form.html', data = None)
    if not user.User.validate_user_registration_form(request.form):
        flash('something went wrong...')
        return render_template('registration_form.html', data = request.form)
    user_id = user.User.create_new_user(request.form)
    session['user_id'] = user_id
    flash('User Created Sucessfully!')
    return redirect('/')



@app.route('/')
def homepage():
    if not session["user_id"]:
        return redirect('/login')
    return render_template('home_page.html')

@app.route('/users')
def all_users():
    users = user.User.get_all_users()
    return render_template('all_users.html', users = users)

@app.route('/users/<int:id>')
def single_user(id):
    this_user = user.User.get_user_by_id(id)
    return render_template('single_user.html', user = this_user)