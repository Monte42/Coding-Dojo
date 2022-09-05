from recipes_app.config.mysqlconnection import connectToMySQL, db
from flask import flash, session
from recipes_app.models import user

class Recipe:
    def __init__(self,data):
        self.id = data['id']
        self.user_id = data['user_id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.date_cooked = data['date_cooked']
        self.is_under_30_mins = data['is_under_30_mins']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user = None


    # =============
    # CLASS METHODS
    # =============
    
    # ==========
    # CREATE SQL
    # ==========
    @classmethod
    def create_recipe(cls,form_data):
        if not cls.validate_recipe_form(form_data):
            return False
        data = cls.parse_recipe_data(form_data)
        query = '''
        INSERT INTO recipes
        (user_id,name,description,instructions,
        date_cooked,is_under_30_mins)
        VALUES 
        (%(user_id)s,%(name)s,%(description)s,
        %(instructions)s,%(date_cooked)s,%(is_under_30_mins)s);
        '''
        connectToMySQL(db).query_db(query,data)
        return True


    # ========
    # READ SQL
    # ========
    @classmethod
    def get_all_recipes(cls):
        query = '''
        SELECT * FROM recipes
        JOIN users
        ON recipes.user_id = users.id;
        '''
        results = connectToMySQL(db).query_db(query)
        all_recipes = []
        for recipe in results:
            recipe_data = {
                'id': recipe['id'],
                'user_id': recipe['user_id'],
                'name': recipe['name'],
                'description': recipe['description'],
                'instructions': recipe['instructions'],
                'date_cooked': recipe['date_cooked'],
                'is_under_30_mins': recipe['is_under_30_mins'],
                'created_at': recipe['created_at'],
                'updated_at': recipe['updated_at'],
            }
            this_recipe = cls(recipe_data)
            user_data = cls.create_user_data(recipe)
            this_recipe.user = user.User(user_data)
            all_recipes.append(this_recipe)
        return all_recipes

    @classmethod
    def get_recipe_by_id(cls,id):
        data ={'id':id}
        query = '''
        SELECT * from recipes
        JOIN users
        ON users.id = recipes.user_id
        WHERE recipes.id = %(id)s;
        '''
        results = connectToMySQL(db).query_db(query,data)
        this_recipe = cls(results[0])
        for recipe in results:
            creator = cls.create_user_data(recipe)
        this_recipe.user = user.User(creator)
        print(results[0]['user_id'])
        return this_recipe



    # ==========
    # UPDATE SQL
    # ==========
    @classmethod
    def update_recipe(cls,form_data,id):
        if not cls.validate_recipe_form(form_data):
            return False
        data = cls.parse_recipe_data(form_data)
        data['id'] = id
        query = '''
        UPDATE recipes
        SET
        name = %(name)s,
        description = %(description)s,
        instructions = %(instructions)s,
        date_cooked = %(date_cooked)s,
        is_under_30_mins = %(is_under_30_mins)s
        WHERE id = %(id)s;
        '''
        connectToMySQL(db).query_db(query,data)
        return True


    # ==========
    # DELETE SQL
    # ==========
    @classmethod
    def delete_recipe(cls,id):
        data = {"id":id}
        query = '''
        DELETE FROM recipes
        WHERE id = %(id)s;
        '''
        return connectToMySQL(db).query_db(query,data)


    # ==============
    # STATIC METHODS
    # ==============

    # FORM VALIDATIONS
    @staticmethod
    def validate_recipe_form(form_data):
        is_valid = True
        if len(form_data['name']) < 3:
            flash('Name must be at least 3 charaters')
            is_valid = False
        if len(form_data['description']) < 15:
            flash('Desription must be at least 3 charaters')
            is_valid = False
        if len(form_data['instructions']) < 5:
            flash('Instructions must be at least 3 charaters')
            is_valid = False
        return is_valid

    # PARSE FORM DATA
    @staticmethod
    def parse_recipe_data(form_data):
        parsed_data = {}
        parsed_data['user_id'] = session['user_id']
        parsed_data['name'] = form_data['name']
        parsed_data['description'] = form_data['description']
        parsed_data['instructions'] = form_data['instructions']
        parsed_data['date_cooked'] = form_data['date_cooked']
        parsed_data['is_under_30_mins'] = form_data['is_under_30_mins']
        return parsed_data

    @staticmethod
    def create_user_data(data):
        user_data = {
            'id': data['users.id'],
            'first_name': data['first_name'],
            'last_name': data['last_name'],
            'email': data['email'],
            'password': data['password'],
            'created_at': data['users.created_at'],
            'updated_at': data['users.updated_at']
        }
        return user_data