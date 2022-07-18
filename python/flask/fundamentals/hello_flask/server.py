from flask import Flask, render_template
import random
app = Flask(__name__)

@app.route('/')
def hello_world():
    # return "Hello World"
    return render_template("index.html",username='Mr.636',num=5)

@app.route('/lists')
def render_lists():
    student_info = [
        {'name' : 'Michael', 'age' : 35},
        {'name' : 'John', 'age' : 30 },
        {'name' : 'Mark', 'age' : 25},
        {'name' : 'KB', 'age' : 27}
    ]
    random_num = []
    for i in range(3):
        random_num.append(random.randint(0,9))
    return render_template("lists.html", random_numbers = random_num, students = student_info)

@app.route('/mr636/<string:name>/<int:num>')
def mr_636(name,num):
    return f'''
    Welcome {name},
    Kawasaki, King of the streets!,
    {num*num}
    '''



if __name__ == "__main__":
    app.run(debug=True)