from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)
app.secret_key = "KingoftheStreets636"

@app.route('/')
def home_page():
    if 'count' in session:
        session['count'] += 1
        session['homepage'] += 1
    else:
        session['count'] = 1
        session['homepage'] = 1
        session['countpage'] = 0
    return render_template('index.html', page='Home Page')

@app.route('/count', methods=['POST'])
def add_to_counter():
    session['count'] += 1
    session['countpage'] += 1
    return render_template('index.html', page='Count Page')

@app.route('/two', methods=['POST'])
def add_two_counter_():
    session['count'] += 2
    return redirect('/')

@app.route('/form_added', methods=['POST'])
def add_user_num_to_counter():
    session['count'] += int(request.form['num'])
    return redirect('/')

@app.route('/destroy_session', methods=['POST'])
def reset_counter():
    # session.pop('count') -- this must run before clear, and is only needed if we want to clear a single key
    session.clear() # This clears the whole session
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)