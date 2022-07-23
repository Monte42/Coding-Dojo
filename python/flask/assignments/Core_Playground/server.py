# Importing packages
from flask import Flask, render_template, redirect

# Initiating App
app = Flask(__name__)

# Push Client to /play
@app.route('/')
def push_to_play_page():
    return redirect('/play')

# Display 3 blue boxes
@app.route('/play')
def play():
    return render_template('index.html', boxes = set_boxes_to_be_displayed())

# Display client defined number of boxes 
@app.route('/play/<int:num>')
def play_with_num(num):
    return render_template('index.html', boxes = set_boxes_to_be_displayed(num))

# Display client defined color and number of boxes 
@app.route('/play/<int:num>/<color>')
def play_with_num_and_color(num,color):
    return render_template('index.html', boxes = set_boxes_to_be_displayed(num,color))


# App functions
def set_boxes_to_be_displayed(num=3,color="blue"):
    boxes_to_display = {
        "number_of_boxes": num,
        "color_of_boxes": color
    }
    return boxes_to_display


# Run App
if __name__ == "__main__":
    app.run(debug=True)