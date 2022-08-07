from users_app import app
from flask import render_template, redirect, request, flash, session
from users_app.models import motorcycle, user


# ============
# CREATE ROUTE
# ============
@app.route('/create_bike', methods=['GET', 'POST'])
def add_bike_to_garage():
    if not session.get('user_id'):
        return redirect('/login')
    if request.method == 'GET':
        return render_template('motorcycles/new_motorcycle_form.html')
    id = session['user_id']
    if not motorcycle.Motorcycle.validate_new_bike_form(request.form, id):
        flash('something went wrong...')
        return render_template('motorcycles/new_motorcycle_form.html', data = request.form)
    bike_id = motorcycle.Motorcycle.create_new_motorcycle(request.form, id)
    flash('Bike was successfully added!')
    return redirect(f'/bikes/{bike_id}')



# ===========
# READ ROUTES
# ===========
# VIEW ALL BIKES
@app.route('/bikes')
def show_all_bikes():
    if not session.get('user_id'):
        return redirect('/login')
    all_bikes = motorcycle.Motorcycle.get_all_motorcycles()
    return render_template('motorcycles/all_bikes.html', bikes=all_bikes)

# VIEW SINGEL BIKE
@app.route('/bikes/<int:id>')
def view_single_bike(id):
    if not session.get('user_id'):
        return redirect('/login')
    this_bike = motorcycle.Motorcycle.get_motorcycle_by_id(id)
    return render_template('motorcycles/view_bike.html', bike=this_bike)



# ============
# UPDATE ROUTE
# ============
@app.route('/bikes/<int:id>/edit', methods=["GET", "POST"])
def update_bike(id):
    if not session.get('user_id'):
        return redirect('/login')
    this_bike = motorcycle.Motorcycle.get_motorcycle_by_id(id)
    if session['user_id'] != this_bike.user.id:
            flash("You are not authorized to do that!")
            return redirect('/')
    if request.method == "GET":
        return render_template('motorcycles/update_motorcycle.html',bike=this_bike)
    motorcycle.Motorcycle.udpate_motorcyle(request.form)
    return redirect(f'/bikes/{id}')



# ============
# DELETE ROUTE
# ============
@app.route('/bikes/<int:id>/delete')
def delete_bike(id):
    this_bike = motorcycle.Motorcycle.get_motorcycle_by_id(id)
    if session['user_id'] != this_bike.user.id:
            flash("You are not authorized to do that!")
            return redirect('/')
    motorcycle.Motorcycle.delete_motorcycle(id)
    return redirect('/bikes')