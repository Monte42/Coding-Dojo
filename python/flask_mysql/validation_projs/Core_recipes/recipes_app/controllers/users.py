from recipes_app import app
from flask import render_template, redirect, request,flash, session
from recipes_app.models import user


# ====================
# REGISTER/LOGIN ROUTE
# ====================
@app.route('/')
def login_register_page():
    if session.get('user_id'):
        return redirect('/recipes')
    return render_template('index.html', data = None)

# =================
# CREATE USER ROUTE
# =================
@app.route('/register', methods=['POST'])
def register_user():
    if user.User.create_user(request.form):
        return redirect('/recipes')
    return render_template('index.html',data = request.form)

# ===============
# LOGIN USER POST
# ===============
@app.route('/login', methods=["POST"])
def login():
    if user.User.login_user(request.form):
        return redirect('/recipes')
    return render_template('index.html',data = request.form)

# =================
# LOGOUT USER ROUTE
# =================
@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')



# ===========
# READ ROUTES
# ===========
# GET ALL USER
@app.route('/users')
def get_all_users():
    if session.get('user_id'):
        all_users = user.User.get_all_users()
        return render_template('users/all_users.html', users=all_users)
    return redirect('/')

# GET SINGLE USER
@app.route('/users/<int:id>')
def get_single_user(id):
    if session.get('user_id'):
        this_user = user.User.get_user_by_id(id)
        if this_user:
            return render_template('users/show_user.html', user=this_user)
    return redirect('/')



# =================
# UPDATE USER ROUTE
# =================
@app.route('/users/<int:id>/edit', methods = ["GET","POST"])
def update_user(id):
    if session.get('user_id'):
        if request.method == 'GET':
            this_user = user.User.get_user_by_id(id)
            if this_user.id != session['user_id']:
                flash('You are not authorized to do that!')
                return redirect('/users')
            return render_template('users/edit_user.html', data=this_user)
        if user.User.update_user(request.form):
            return redirect(f'/users/{id}')
        return redirect(f'/users/{id}/edit')
    return redirect('/')



# =================
# DELETE USER ROUTE
# =================
@app.route('/users/<int:id>/delete')
def delete_user(id):
    if session.get('user_id'):
        if session['user_id'] != id:
            flash("You are not authorized to do that!")
            return redirect('/')
        user.User.delete_user(id)
        session.clear()
        return redirect('/')