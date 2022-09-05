from belt_app.config.mysqlconnection import connectToMySQL, db
from flask import flash, session
from belt_app.models import user


# ==========
# INIT CLASS
# ==========
class Sighting:
    def __init__(self,data):
        self.id = data['id']
        self.user_id = data['user_id']
        self.location = data['location']
        self.description = data['description']
        self.number_of_sasquatch = data['number_of_sasquatch']
        self.date_of_sighting = data['date_of_sighting']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user = None

    def convert_date_of_sighting(self):
        return self.date_of_sighting.strftime("%B %d, %y")



    # =============
    # CLASS METHODS
    # =============

    # ===========
    #  CREATE SQL
    # ===========
    @classmethod
    def create_sighting(cls,form_data):
        if not cls.validate_sighting_form(form_data):
            return False
        data = cls.parse_sighting_data(form_data)
        query = '''
        INSERT INTO sightings
        (user_id,location,description,
        number_of_sasquatch,date_of_sighting)
        VALUES
        (%(user_id)s,%(location)s,%(description)s,
        %(number_of_sasquatch)s,%(date_of_sighting)s);
        '''
        sighting_id = connectToMySQL(db).query_db(query,data)
        return sighting_id



    # ========
    # READ SQL
    # ========
    @classmethod
    def get_all_sightings(cls):
        query = '''
        SELECT * FROM sightings
        JOIN users
        ON user.id = sightings.user_id;
        '''
        results = connectToMySQL(db).query_db(query)
        all_sightings = []
        for spotting in results:
            # create Sighting
            this_user = {
                'id': spotting['users.id'],
                'fist_name': spotting['fist_name'],
                'last_name': spotting['last_name'],
                'email': spotting['email'],
                'password': spotting['password'],
                'created_at': spotting['users.created_at'],
                'udpated_at': spotting['users.udpated_at']
            }
            this_sighting = user.user(this_user)
            all_sightings.append(this_sighting)
        return all_sightings













    @classmethod
    def get_sighting_by_id(cls,id):
        data = {'id':id}
        query = '''
        SELECT * FROM sightings
        JOIN users
        ON sightings.user_id = users.id
        WHERE sightings.id = %(id)s;
        '''
        results = connectToMySQL(db).query_db(query,data)
        this_sighting = cls(results[0])
        spotter = {
            'id': results[0]['users.id'],
            'first_name': results[0]['first_name'],
            'last_name': results[0]['last_name'],
            'email': results[0]['email'],
            'password': results[0]['password'],
            'created_at': results[0]['users.created_at'],
            'updated_at': results[0]['users.updated_at']
        }
        this_sighting.user = user.User(spotter)
        return this_sighting


    # ==========
    # UPDATE SQL
    # ==========
    @classmethod
    def update_sighting(cls,form_data,id):
        if not cls.validate_sighting_form(form_data):
            return False
        data = cls.parse_sighting_data(form_data)
        data['id'] = id
        query ='''
        UPDATE sightings
        SET
        location = %(location)s,
        description = %(description)s,
        number_of_sasquatch = %(number_of_sasquatch)s,
        date_of_sighting = %(date_of_sighting)s
        WHERE id = %(id)s;
        '''
        connectToMySQL(db).query_db(query,data)
        return True




    # ==========
    # DELETE SQL
    # ==========
    @classmethod
    def delete_sighting(cls,id):
        data = {'id':id}
        query = '''
        DELETE FROM sightings
        WHERE id = %(id)s;
        '''
        return connectToMySQL(db).query_db(query,data)




    # ==============
    # STATIC METHODS
    # ==============

    # FORM VALIDATIONS
    @staticmethod
    def validate_sighting_form(form_data):
        print('*******', len(form_data['description']))
        is_valid = True
        if len(form_data['location']) < 2:
            flash('Location field is required...')
            is_valid = False
        if len(form_data['description']) < 10:
            flash('Please include a detailed description of the event.')
            is_valid = False
        if not form_data['date_of_sighting']:
            flash('Please Select a date....')
            is_valid = False
        if int(form_data['number_of_sasquatch']) <= 0:
            flash('You must have seen at least one sasquatch.')
            is_valid = False
        return is_valid


    # PARSE FORM DATA
    @staticmethod
    def parse_sighting_data(form_data):
        parsed_data = {}
        parsed_data['user_id'] = session['user_id']
        parsed_data['location'] = form_data['location']
        parsed_data['description'] = form_data['description']
        parsed_data['number_of_sasquatch'] = form_data['number_of_sasquatch']
        parsed_data['date_of_sighting'] = form_data['date_of_sighting']
        return parsed_data