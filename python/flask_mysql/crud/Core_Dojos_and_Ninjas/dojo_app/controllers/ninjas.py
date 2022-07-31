from dojo_app import app
from flask import render_template,redirect, request
from dojo_app.models import dojo, ninja


@app.route('/create_ninja', methods=["GET", "POST"])
def create_ninja():
    if request.method == "GET":
        dojos = dojo.Dojo.get_all_dojos()
        return render_template('new_ninja_form.html', dojos = dojos)
    data = {
        'dojo_id': request.form['dojo_id'],
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'age': request.form['age']
    }
    ninja.Ninja.creat_new_ninja(data)
    return redirect(f'/dojo/{data["dojo_id"]}')