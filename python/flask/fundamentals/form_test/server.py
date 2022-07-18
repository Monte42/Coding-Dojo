from urllib import request
from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/users', methods=['POST'])
def create_user():
    print("Got post info")
    print(request.form["name"])
    name = request.form['name']
    return render_template('new_user.html', name=name)

if __name__ == "__main__":
    app.run(debug=True)