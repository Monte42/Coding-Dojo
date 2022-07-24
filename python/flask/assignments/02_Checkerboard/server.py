from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route('/')
def eight_by_eight():
    return render_template('index.html',board=construct_board())

@app.route('/<int:num_1>')
def build_board_one_num(num_1):
    return render_template('index.html',board=construct_board(num_1,num_1))

@app.route('/<int:num_1>/<int:num_2>')
def build_board_two_num(num_1,num_2):
    return render_template('index.html',board=construct_board(num_1,num_2))

@app.route('/<int:num_1>/<int:num_2>/<color_1>')
def build_board_two_num_one_color(num_1,num_2,color_1):
    return render_template('index.html',board=construct_board(num_1,num_2,color_1))

@app.route('/<int:num_1>/<int:num_2>/<color_1>/<color_2>')
def build_board_two_num_two_color(num_1,num_2,color_1,color_2):
    return render_template('index.html',board=construct_board(num_1,num_2,color_1,color_2))






def construct_board(x=8,y=8,color_1='black',color_2='red'):
    board = {
        'x' : validate_x(x),
        'y' : y,
        'color_1' : color_1,
        'color_2' : color_2,
    }
    return board

def validate_x(x):
    if x % 2 != 0:
        x = x + 1
        return x
    return x

if __name__ == "__main__":
    app.run(debug=True)