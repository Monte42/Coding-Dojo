from users_app.config.mysqlconnection import connectToMySQL, db
# from users_app.models import mortorcyle
from users_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.+_-]+\.[a-zA-Z]+$')
PWD_REGEX = re.compile(r"^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?])[\w\d!@#$%^&*?]{6,12}$")

class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.username = data['username']
        self.email = data['email']
        self.password = data['password']
        self.user_img = data['user_img']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.morotcycles = []


    @staticmethod
    def validate_user_registration_form(user):
        query = '''
        SELECT username FROM users;
        '''
        usernames = connectToMySQL(db).query_db(query)
        print(usernames)
        is_valid = True
        if not EMAIL_REGEX.match(user['email']):
            flash("Invalid Email...")
            is_valid = False
        if not PWD_REGEX.match(user['password1']):
            flash('''
                Password must have a upper/lowercase letter, 
                a number, a specail charater, and be
                6 - 12 charaters long.
                ''')
            is_valid = False
        if user['password1'] != user['password2']:
            flash('Passwords do not match...')
        if len(user['first_name']) < 2:
            flash('First name must be at least 2 characters long')
            is_valid = False
        if len(user['last_name']) < 2:
            flash('Last name must be at least 2 characters long')
            is_valid = False
        if len(user['username']) < 2:
            flash('Username must be at least 2 characters long')
            is_valid = False
        return is_valid


    # READ SQL
    @classmethod
    def get_all_users(cls):
        query = '''
        SELECT * FROM users;
        '''
        results = connectToMySQL(db).query_db(query)
        users = []
        for person in results:
            users.append(cls(person))
        return users
    
    @classmethod
    def get_user_by_id(cls, id):
        data = {'id': id}
        query = '''
        SELECT * FROM users    
        WHERE id = %(id)s;
        '''  # Need to update to join motorcycles
        result = connectToMySQL(db).query_db(query, data)
        user = cls(result[0])
        return user

    @classmethod
    def get_user_by_username(cls, form_data):
        query = '''
        SELECT * FROM users
        WHERE username = %(username)s;
        '''
        data = {'username': form_data['username']}
        result = connectToMySQL(db).query_db(query,data)
        if result:
            user = cls(result[0])
            return user
        return None
    
    # CREATE SQL
    @classmethod
    def create_new_user(cls, form_data):
        query = '''
        INSERT INTO users 
        (first_name,last_name,username,
        email,password,user_img)
        VALUES
        (%(first_name)s,%(last_name)s,%(username)s,
        %(email)s,%(password)s,%(user_img)s);
        '''
        pwd = bcrypt.generate_password_hash(form_data['password1'])
        data = {
            'first_name': form_data['first_name'],
            'last_name': form_data['last_name'],
            'username': form_data['username'],
            'email': form_data['email'],
            'password': pwd,
            'user_img': form_data['user_img'],
        }
        new_user = connectToMySQL(db).query_db(query,data)
        print(new_user)
        return new_user



    # UPDATE SQL
    @classmethod
    def update_user(cls,form_data):
        pass



    # DELETE SQL
    @classmethod
    def delete_user(cls, id):
        pass 
    
    
