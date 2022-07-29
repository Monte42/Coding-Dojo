from flask import Flask, render_template, redirect, request
from users import User

app = Flask(__name__)

@app.route('/')
def show_all_users():
    users = User.get_all_users()
    return render_template('index.html', users = users)

@app.route('/view/<id>')
def show_single_user(id):
    data = {'id': id}
    user = User.get_single_user(data)
    return render_template('single_user.html', user = user[0])

@app.route('/create_user')
def create_user_form():
    return render_template('create_user_form.html')

@app.route('/process', methods=["POST"])
def process_user():
    data = {
        'first_name' : request.form["first_name"],
        'last_name' : request.form["last_name"],
        'email' : request.form["email"]
    }
    new_user = User.create_new_user(data)
    return redirect(f'/view/{new_user}')

@app.route('/update/<id>', methods=['GET', 'POST'])
def update_user(id):
    if request.method == "GET":
        data = {'id':id}
        user = User.get_single_user(data)
        return render_template('edit_form.html', user = user[0])
    edited_data = {
        'id': request.form['id'],
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
    }
    User.update_user(edited_data)
    return redirect(f'/view/{id}')

@app.route('/delete/<id>')
def delete_user(id):
    data = {'id': id}
    User.delete_user(data)
    return redirect('/')

if __name__=='__main__':
    app.run(debug=True)