from flask import Flask

app = Flask(__name__)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return "Sorry, No response. Try again."

@app.route('/')
def hello_world():
    return "Hello World!"

@app.route('/dojo')
def say_dojo():
    return "Dojo"

@app.route('/say/<name>')
def say_name(name):
    return f"Hi {str(name)}"

@app.route('/repeat/<int:num>/<word>')
def repeat_word(num,word):
    my_string = ""
    for i in range(num):
        my_string += f"{word}"
    return my_string


if __name__ == "__main__":
    app.run(debug=True)