from flask import Flask, render_template, redirect, request
from users import User

app = Flask(__name__)

@app.route('/')
def all_users():
    users = User.get_all_users()
    return render_template('index.html', users = users)

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
    User.create_new_user(data)
    return redirect('/')




if __name__=='__main__':
    app.run(debug=True)