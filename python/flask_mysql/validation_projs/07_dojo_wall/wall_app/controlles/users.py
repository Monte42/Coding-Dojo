from wall_app import app
from flask import render_template, redirect, request, flash, session
from wall_app.models import user

@app.route('/')
def registraion_login_page():
    return render_template('index.html')