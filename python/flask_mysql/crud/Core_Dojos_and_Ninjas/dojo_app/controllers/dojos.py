from dojo_app import app
from flask import render_template, redirect, request

from dojo_app.models import dojo

@app.route('/dojos')
def homepage():
    all_dojos = dojo.Dojo.get_all_dojos()
    return render_template('index.html', dojos = all_dojos)

@app.route('/dojo/<id>')
def show_dojo_ninjas(id):
    data = {'id':id}
    dojo_and_ninjas = dojo.Dojo.get_dojo_ninjas(data)
    return render_template('dojo.html', dojo = dojo_and_ninjas)

@app.route('/add_dojo', methods=["POST"])
def create_dojo():
    data = {'name': request.form['name']}
    dojo.Dojo.create_new_dojo(data)
    return redirect('/dojos')