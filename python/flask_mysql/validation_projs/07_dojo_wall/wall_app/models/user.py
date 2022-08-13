from wall_app.config.mysqlconnection import connectToMySQL, db
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask import flash
import re

# PATTERN VALIDATORS
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.+_-]+\.[a-zA-Z]+$')
PWD_REGEX = re.compile(r"^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?])[\w\d!@#$%^&*?]{6,12}$")

class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.posts = []
        self.messages = []
        
    def user_fullname(self):
        return f'{self.first_name} {self.last_name}'



    # FORM VALIDATIONS
    @staticmethod
    def validate_registration_form(form_data):
        existing_users = fetch_emails()
        is_valid = True
        if not EMAIL_REGEX.match(form_data['email']):
            flash("Invalid Email...")
            is_valid = False
        if not PWD_REGEX.match(form_data['password1']):
            flash('''
                Password must have a upper/lowercase letter, 
                a number, a specail charater, and be
                6 - 12 charaters long.
                ''')
            is_valid = False
        if form_data['password1'] != form_data['password2']:
            flash('Passwords do not match...')
        if len(form_data['first_name']) < 2:
            flash('First name must be at least 2 characters long')
            is_valid = False
        if len(form_data['last_name']) < 2:
            flash('Last name must be at least 2 characters long')
            is_valid = False
        if len(form_data['username']) < 2:
            flash('Username must be at least 2 characters long')
            is_valid = False
        if form_data['email'] in existing_users:
            flash('Sorry, that email is already in use...')
            is_valid = False
        return is_valid



    # CREATE SQL
    @classmethod
    def create_user(cls,form_data):
        query = '''
        INSERT INTO users 
        (firstname,last_name,email,password)
        VALUES 
        (%(first_name)s,%(last_name)s,%(email)s,%(password)s);
        '''
        pwd = bcrypt.generate_password_hash(form_data['password1'])
        data = {
            'id': form_data['id'],
            'first_name': form_data['first_name'],
            'last_name': form_data['last_name'],
            'password': pwd,
            'email': form_data['email'],
        }
        new_user = connectToMySQL(db).query_db(query,data)
        return new_user



    #READ SQL
    @classmethod
    def fetch_all_user(cls):
        query = '''
        SELECT * FROM users;
        '''
        results = connectToMySQL(db).query_db(query)
        users = []
        for person in results:
            this_person = cls.fetch_user_by_id(person['id'])
            users.append(cls(this_person))
        return users

    @classmethod
    def fetch_user_by_id(cls, id):
        query = '''
        SELECT * FROM users
        LEFT JOIN posts
        ON posts.user_id = users.id
        LEFT JOIN messeages
        ON messages.to_id = users.id
        WHERE users.id = %(id)S;
        '''
        data = {'id':id}
        results = connectToMySQL(db).query_db(query,data)
        this_user = results[0]
        for row in results:
            post_data = {
                'id': row['posts.id'],
                'user_id': row['user_id'],
                'content': row['posts.content'],
                'created_at': row['posts.created_at'],
                'updated_at': row['posts.updated_at']
            }
            # this_post = post.Post(post_data)
            # this_user.post.append(this_post)
            msg_data = {
                'id': row['messages.id'],
                'to_id': row['to_id'],
                'from_id': row['from_id'],
                'content': row['messages.content'],
                'is_read': row['is_read'],
                'created_at': row['messages.created_at'],
                'updated_at': row['messages.updated_at'],
            }
            # this_msg = message.Message(msg_data)
            # this_user.messages.append(this_msg)
        return this_user

    # for login
    @classmethod
    def fetch_user_by_email(cls, form_data):
        query = '''
        SELECT * FROM users
        WHERE email = %(email)s;
        '''
        data = {'email':form_data['email']}
        result = connectToMySQL(db).query_db(query,data)
        if result:
            this_user = cls(result[0])
            return this_user
        return None



    # UPDATE SQL
    @classmethod
    def update_user(cls,form_data):
        query = '''
        UPDATE users
        SET first_name = %(first_name)s,
        %(last_name)s,
        %(email)s
        WHERE id = %(id)s;
        '''
        return connectToMySQL(db).query_db(query, form_data)



    # DELETE SQL
    @classmethod
    def delete_user(cls, id):
        query = '''
        DELETE FROM user
        WHERE id = %(id)s;
        '''
        data = {'id':id}
        return connectToMySQL(db).query_db(query,data)



# Check current email for duplicates
def fetch_emails():
    query = '''
    SELECT email FROM users;
    '''
    results = connectToMySQL(db).query_db(query)
    existing_emails =[]
    for email in results:
        existing_emails.append(email['email'])
    return existing_emails
