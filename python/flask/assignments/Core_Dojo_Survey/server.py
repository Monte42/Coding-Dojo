from flask import Flask, render_template, redirect, session, request

app = Flask(__name__)
app.secret_key = "My super secret key"

@app.route('/')
def survey():
    return render_template('index.html')

@app.route('/process', methods=["POST"])
def process():
    session['first_name'] = request.form['first_name']
    session['last_name'] = request.form['last_name']
    session['email'] = request.form['email']
    session['dojo_location'] = request.form['dojo_location']
    session['gender'] = request.form['gender']
    session['age_range'] = request.form['age_range']
    session['email_signup'] = "Yes" if "on" ==  request.form['email_signup'] else "No"
    return redirect('/result')

@app.route('/result')
def result():
    return render_template('results.html')

if __name__=="__main__":
    app.run(debug=True)