from re import template
from flask import Flask, render_template, redirect, request, session
import random

app = Flask(__name__)
app.secret_key = 'my_super_secret_key'

@app.route('/')
def homepage():
    if 'number' in session:
        if session['guess'] <= 0:
            session['msg'] = f'Game Over, The Number was {session["number"]}'
            session['class_list'] = ['wrong','hidden','']
    else:
        session['number'] = random.randint(1,100)
        session['guess'] = 5
        session['last_guess'] = 1
        session['msg'] = ''
        session['class_list'] = ['','','hidden']
    return render_template('index.html')

@app.route('/guess', methods=["POST"])
def guess():
    guessed_number = int(request.form['num'])
    session['msg'] = return_msg(guessed_number)
    session['class_list'] = return_class(guessed_number)
    session['last_guess'] = guessed_number
    session['guess'] -= 1
    print(session['class_list'])
    return redirect('/')

@app.route('/replay')
def replay():
    session.clear()
    return redirect('/')

@app.route('/leader_board', methods=["POST"])
def leader_board():
    name = request.form['name']
    guesses = 5 - session['guess']
    return render_template("leader_board.html", name=name,guesses=guesses)


def return_class(num):
    class_list = []
    if num != session['number']:
        class_list.append('wrong')
        class_list.append('')
        class_list.append('hidden')
    else:
        class_list.append('correct')
        class_list.append('hidden')
        class_list.append('')
    return class_list

def return_msg(num):
    if num > session['number']:
        return "Too High!"
    elif num < session['number']:
        return "Too Low!"
    else:
        return f"You Guessed It! The Number Was {session['number']}"

if __name__ == '__main__':
    app.run(debug=True)