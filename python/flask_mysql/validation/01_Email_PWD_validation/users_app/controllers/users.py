from atexit import register
from users_app import app
from flask import render_template, redirect, request, session, flash
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from users_app.models import user


# =============
# LOGIN/LOGOUT
# =============
@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'GET':
        return render_template('users/login.html')
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


# ============
# CREATE ROUTE
# ============
@app.route('/register', methods=["GET", "POST"])
def create_user_page():
    if request.method == "GET":
        return render_template('users/registration_form.html', data = None)
    if not user.User.validate_user_registration_form(request.form):
        flash('something went wrong...')
        return render_template('users/registration_form.html', data = request.form)
    user_id = user.User.create_new_user(request.form)
    session['user_id'] = user_id
    flash('User Created Sucessfully!')
    return redirect('/')



# ===========
# READ ROUTES
# ===========
# HOMEPAGE
@app.route('/')
def homepage():
    if not session.get('user_id'):
        return redirect('/login')
    return render_template('home_page.html')

# GET ALL USERS
@app.route('/users')
def all_users():
    if not session.get('user_id'):
        return redirect('/login')
    users = user.User.get_all_users()
    return render_template('users/all_users.html', users = users)

# GET SINGLE USER
@app.route('/users/<int:id>')
def single_user(id):
    if not session.get('user_id'):
        return redirect('/login')
    this_user = user.User.get_user_by_id(id)
    return render_template('users/single_user.html', user = this_user)



# ============
# UPDATE ROUTE
# ============
@app.route('/users/<int:id>/edit', methods=["GET","POST"])
def update_user(id):
    if not session.get('user_id'):
        return redirect('/login')
    if session['user_id'] != id:
        flash('You are not authorized to do that!')
        return redirect('/')
    if request.method == "GET":
        this_user = user.User.get_user_by_id(id)
        return render_template('users/update_user.html', user=this_user)
    user.User.update_user(request.form)
    return redirect(f'/users/{id}')



# ============
# DELETE ROUTE
# ============
@app.route('/users/<int:id>/delete')
def delete_user(id):
    if session['user_id'] != id:
        flash("You are not authorized to do that!")
        return redirect('/')
    user.User.delete_user(id)
    session.clear()
    return redirect('/register')