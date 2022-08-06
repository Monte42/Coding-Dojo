from users_app.config.mysqlconnection import connectToMySQL, db
from users_app.models import user
from flask import flash

class Motorcycle:
    def __init__(self,data):
        self.id = data['id']
        self.user_id = data['user_id']
        self.year = data['year']
        self.make = data['make']
        self.model = data['model']
        self.description = data['description']
        self.bike_img = data['bike_img']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user = None
        
        
        
    # VALIDATIONS
    @staticmethod
    def validate_new_bike_form(bike, id):
        print(type(int(bike['year'])) == int)
        is_valid = True
        if id <= 0:
            flash('You must Sign In first')
            is_valid = False
        if type(int(bike['year'])) != int or len((bike['year'])) != 4:
            flash('Year Must be a 4 digit number')
            is_valid = False
        if len(bike['make']) < 3:
            flash('Make must be atleast 3 characters long')
            is_valid = False
        if len(bike['model']) < 3:
            flash('Make must be atleast 3 characters long')
            is_valid = False
        return is_valid


    # READ SQL
    @classmethod
    def get_all_motorcycles(cls):
        query = '''
        SELECT * FROM motorcycles;
        '''
        results = connectToMySQL(db).query_db(query)
        bikes = []
        for bike in results:
            bikes.append(cls(bike))
        return bikes
    
    @classmethod
    def get_motorcycle_by_id(cls,id):
        query = '''
        SELECT * FROM motorcycles
        WHERE id = %(id)s
        '''
        data = {'id':id}
        result = connectToMySQL(db).query_db(query,data)
        bike = cls(result[0])
        return bike
    
    
    
    # CREATE SQL
    @classmethod
    def create_new_motorcycle(cls,form_data,id):
        query = '''
        INSERT INTO motorcycles
        (user_id,year,make,model,description,bike_img)
        VALUES
        (%(user_id)s, %(year)s, %(make)s, 
        %(model)s, %(description)s, %(bike_img)s);
        '''
        data = {
            'user_id': id,
            'year': int(form_data['year']),
            'make': form_data['make'],
            'model': form_data['model'],
            'description': form_data['description'],
            'bike_img': form_data['bike_img']
        }
        bike_id = connectToMySQL(db).query_db(query,data)
        return bike_id
    
    
    
    # UPDATE SQL
    @classmethod
    def udpate_motorcyle(cls,form_data):
        query = '''
        UPDATE motorcycles
        SET year = %(year)s, make = %(make)s,
        model = %(model)s, description = %(description)s,
        bike_img = %(bike_img)s
        WHERE id = %(id)s;
        '''
        data = {
            'year': form_data['year'],
            'make': form_data['make'],
            'model': form_data['model'],
            'description': form_data['description'],
            'bike_img': form_data['bike_img']
        }
        return connectToMySQL(db).query_db(query, data)
    
    
    
    # DELETE SQL
    @classmethod
    def delete_motorcycle(cls,id):
        query = '''
        DELETE FROM motorcycles
        WHERE id = %(id)s;
        '''
        data = {'id':id}
        return connectToMySQL(db).query_db(query,data)