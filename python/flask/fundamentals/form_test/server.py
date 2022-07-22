from urllib import request
from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key='mr636_rules'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/users', methods=['POST'])
def create_user():
    print("Got post info")
    print(request.form["name"])
    session["name"] = request.form['name']
    session["email"] = request.form['email']
    return redirect('/show')

@app.route("/show")
def Show_user():
    print('Showing user info from form...')
    print(request.form)
    return render_template("new_user.html")

if __name__ == "__main__":
    app.run(debug=True)