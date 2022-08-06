from users_app import app
from flask import render_template, redirect, request, flash, session
from users_app.models import motorcycle, user

@app.route('/create_bike', methods=['GET', 'POST'])
def add_bike_to_garage():
    if request.method == 'GET':
        return render_template('new_motorcycle_form.html')
    id = session['user_id']
    if not motorcycle.Motorcycle.validate_new_bike_form(request.form, id):
        flash('something went wrong...')
        return render_template('new_motorcycle_form.html', data = request.form)
    bike_id = motorcycle.Motorcycle.create_new_motorcycle(request.form, id)
    flash('Bike was successfully added!')
    return redirect('/')