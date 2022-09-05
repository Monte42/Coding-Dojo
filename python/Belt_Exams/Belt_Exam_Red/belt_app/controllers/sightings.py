from belt_app import app
from flask import render_template,redirect,request,flash,session
from belt_app.models import sighting
from datetime import date
today = date.today()

# =============
# CREATE ROUTE
# =============
@app.route('/new/sighting', methods = ['GET', 'POST'])
def create_new_sighting():
    if session.get('user_id'):
        if request.method == 'GET':
            return render_template('sightings/create_sighting.html',data=None)
        if sighting.Sighting.create_sighting(request.form):
            return redirect('/dashboard')
        return render_template('sightings/create_sighting.html',data=request.form)
    return redirect('/')



# ============
# READ ROUTES
# ============
@app.route('/dashboard')
def show_all_sightings():
    if session.get('user_id'):
        all_sightings = sighting.Sighting.get_all_sightings()
        return render_template('sightings/all_sightings.html',sightings=all_sightings)
    return redirect('/')

@app.route('/show/<int:id>')
def show_single_sighting(id):
    if session.get('user_id'):
        this_sighting = sighting.Sighting.get_sighting_by_id(id)
        return render_template('sightings/single_sighting.html',sighting=this_sighting)
    return redirect('/')



# =============
# UPDATE ROUTE
# =============
@app.route('/edit/<int:id>', methods=['GET','POST'])
def edit_sighting(id):
    if session.get('user_id'):
        this_sighting = sighting.Sighting.get_sighting_by_id(id)
        if request.method == 'GET':
            if this_sighting.user.id != session['user_id']:
                flash('You are not authorized to do that!')
                return redirect('/dashboard')
            return render_template('sightings/edit_sighting.html',data=this_sighting,id=this_sighting.id)
        if not sighting.Sighting.update_sighting(request.form,id):
            return render_template('sightings/edit_sighting.html',data=request.form,id=this_sighting.id)
        return redirect(f'/show/{id}')
    return redirect('/')

# =============
# DELETE ROUTE
# =============
@app.route('/delete/<int:id>')
def delete_sighting(id):
    if session.get('user_id'):
        this_sighting = sighting.Sighting.get_sighting_by_id(id)
        if this_sighting.user.id != session['user_id']:
            flash('You are not authorized to do that!')
            return redirect('/dashboard')
        sighting.Sighting.delete_sighting(id)
        return redirect('/dashboard')
    return redirect('/')