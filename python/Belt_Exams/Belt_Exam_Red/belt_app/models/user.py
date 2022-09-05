from belt_app.config.mysqlconnection import connectToMySQL, db
from flask import flash, session
import re
from belt_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)



# ==================
# PATTERN VALIDATORS
# ==================
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.+_-]+\.[a-zA-Z]+$')
PWD_REGEX = re.compile(r"^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?])[\w\d!@#$%^&*?]{6,12}$")



# ==========
# INIT CLASS
# ==========
class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        # ADD CLASS ASSOCIATION


    # INSTANCE METHODS
    def print_full_name(self):
        return f'{self.first_name} {self.last_name}'



    # =============
    # CLASS METHODS
    # =============

    # ===========
    #  CREATE SQL
    # ===========
    @classmethod
    def create_user(cls,form_data):
        if not cls.vaildate_register_form(form_data):
            return False
        data = cls.parse_users_registration_form_data(form_data)
        query = '''
        INSERT INTO users 
        (first_name,last_name,email,password)
        VALUES
        (%(first_name)s,%(last_name)s,%(email)s,%(password)s);
        '''
        user_id = connectToMySQL(db).query_db(query,data)
        session['user_id'] = user_id
        session['email'] = data['email']
        session['user_name'] = f'{data["first_name"]} {data["last_name"]}'
        return True



    # ========
    # READ SQL
    # ========
    @classmethod
    def get_all_users(cls):
        query = '''
        SELECT * FROM users;
        '''
        results = connectToMySQL(db).query_db(query)
        all_users = []
        for person in results:
            this_user = cls.get_user_by_id(person['id'])
            all_users.append(this_user)
        return all_users

    @classmethod
    def get_user_by_id(cls,id):
        data = {'id':id}
        query = '''
        SELECT * FROM users
        '''# Join associtation TABLE
        results = connectToMySQL(db).query_db(query,data)
        this_user = cls(results[0])
        # CLASS ASSOCIATION Create for-loop to append instances
        return this_user

    @classmethod
    def get_user_be_email(cls, email):
        data = {'email':email}
        query = '''
        SELECT *
        FROM users
        WHERE email = %(email)s;
        '''
        result = connectToMySQL(db).query_db(query,data)
        if result:
            result = cls(result[0])
        return result



    # ==========
    # UPDATE SQL
    # ==========
    @classmethod
    def update_user(cls,form_data):
        if not cls.vaildate_user_edit_form(form_data):
            return False
        data = cls.parse_user_update_data(form_data)
        data['id'] = session['user_id']
        query = '''
        UPDATE users
        SET 
        first_name = %(first_name)s,
        last_name = %(last_name)s,
        email = %(email)s
        WHERE id = %(id)s;
        '''
        connectToMySQL(db).query_db(query,data)
        session['user_name'] = f'{data["first_name"]} {data["last_name"]} '
        return True



    # ==========
    # DELETE SQL
    # ==========
    @classmethod
    def delete_user(cls,id):
        data = {'id':id}
        query = '''
        DELETE FROM users
        WHERE id = %(id)s;
        '''
        return connectToMySQL(db).query_db(query,data)


    # ==============
    # STATIC METHODS
    # ==============

    # FORM VALIDATIONS
    @staticmethod
    def vaildate_register_form(data):
        is_valid = True
        if User.get_user_be_email(data['email']):
            flash('Sorry this email is already in use..')
            is_valid = False
        if len(data['first_name']) < 2:
            flash('First name must be 2 or characters')
            is_valid = False
        if len(data['last_name']) < 2:
            flash('Last name must be 2 or characters')
            is_valid = False
        if not EMAIL_REGEX.match(data['email']):
            flash('Please enter a valid email...')
            is_valid = False
        if not PWD_REGEX.match(data['password']):
            flash('''Password must have capitol/lowercase letters,
                    a number, and a specail charater''')
            is_valid = False
        if data['password'] != data['confirm_password']:
            flash('Passwords do not match...')
            is_valid = False
        return is_valid

    @staticmethod
    def vaildate_user_edit_form(data):
        is_valid = True
        if User.get_user_be_email(data['email']):
            if session['email'] != data["email"]:
                flash('Sorry, this email is already in use...')
                is_valid = False
        if len(data['first_name']) < 2:
            flash('First_name must be at least 2 characters')
            is_valid = False
        if len(data['last_name']) < 2:
            flash('Last_name must be at least 2 characters')
            is_valid = False
        if not EMAIL_REGEX.match(data['email']):
            flash('Please enter a valid email...')
            is_valid = False
        return is_valid



    # VALIDATE USER LOGIN 
    @staticmethod
    def login_user(data):
        this_user = User.get_user_be_email(data['email'].lower())
        if this_user:
            if bcrypt.check_password_hash(this_user.password, data['password']):
                session['user_id'] = this_user.id
                session['email'] = this_user.email
                session['user_name'] = f'{this_user.first_name} {this_user.last_name}'
                return True
        flash('Invalid email/password')
        return False



    # PARSE FORM DATA
    @staticmethod
    def parse_users_registration_form_data(data):
        parsed_data = {}
        parsed_data['first_name'] = data['first_name'].strip()
        parsed_data['last_name'] = data['last_name'].strip()
        parsed_data['email'] = data['email'].lower().strip()
        parsed_data['password'] = bcrypt.generate_password_hash(data['password'])
        return parsed_data

    @staticmethod
    def parse_user_update_data(data):
        parsed_data = {}
        parsed_data['first_name'] = data['first_name'].strip()
        parsed_data['last_name'] = data['last_name'].strip()
        parsed_data['email'] = data['email'].lower().strip()
        return parsed_data