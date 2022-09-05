from users_app.config.mysqlconnection import connectToMySQL, db
from users_app.models import motorcycle
from users_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask import flash
import re

# PATTERN VALIDATORS
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
        self.motorcycles = []
        
    def get_number_of_bikes(self):
        if self.motorcycles[0].make == None:
            return 0
        return len(self.motorcycles)

    # FORM VALIDATION
    @staticmethod
    def validate_user_registration_form(user):
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
            is_valid = False
        if len(user['first_name']) < 2:
            flash('First name must be at least 2 characters long')
            is_valid = False
        if len(user['last_name']) < 2:
            flash('Last name must be at least 2 characters long')
            is_valid = False
        if len(user['username']) < 2:
            flash('Username must be at least 2 characters long')
            is_valid = False
        if user['username'] in existing_users:
            flash('Sorry, that name is already in use...')
            is_valid = False
        return is_valid

    @staticmethod
    def validate_user_edit_form():
        pass



    # ==========
    # CREATE SQL
    # ==========
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
        return new_user



    # ========
    # READ SQL
    # ========
    # GET ALL USERS
    @classmethod
    def get_all_users(cls):
        query = '''
        SELECT * FROM users;
        '''
        results = connectToMySQL(db).query_db(query)
        users = []
        for person in results:
            this_person = cls.get_user_by_id(person['id'])
            users.append(this_person)
        return users

    # GET USER BY ID
    @classmethod
    def get_user_by_id(cls, id):
        data = {'id': id}
        query = '''
        SELECT * FROM users
        LEFT JOIN motorcycles
        ON motorcycles.user_id = users.id
        WHERE users.id = %(id)s;
        '''
        result = connectToMySQL(db).query_db(query, data)
        this_user = cls(result[0])
        for bike in result:
            bike_data = {
                'id': bike['motorcycles.id'],
                'user_id': bike['user_id'],
                'year': bike['year'],
                'make': bike['make'],
                'model': bike['model'],
                'description': bike['description'],
                'bike_img': bike['bike_img'],
                'created_at': bike['motorcycles.created_at'],
                'updated_at': bike['motorcycles.updated_at'],
            }
            this_bike = motorcycle.Motorcycle(bike_data)
            this_user.motorcycles.append(this_bike)
        return this_user

    # GET USER BY USERNAME => FOR LOGIN
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



    # ==========
    # UPDATE SQL
    # ==========
    @classmethod
    def update_user(cls,form_data):
        query = '''
        UPDATE users
        SET first_name = %(first_name)s,
        last_name = %(last_name)s, 
        email = %(email)s,
        username = %(username)s, 
        user_img = %(user_img)s
        WHERE id = %(id)s;
        '''
        return connectToMySQL(db).query_db(query,form_data)



    # ==========
    # DELETE SQL
    # ==========
    @classmethod
    def delete_user(cls, id):
        query = '''
        DELETE FROM users
        WHERE id = %(id)s;
        '''
        data = {'id':id}
        return connectToMySQL(db).query_db(query,data)



# GET ALL USERNAME FOR VALIDATION
def get_usernames():
    query = '''
        SELECT username FROM users;
        '''
    usernames = connectToMySQL(db).query_db(query)
    temp_arr = []
    for username in usernames:
        temp_arr.append(username['username'])
    return temp_arr