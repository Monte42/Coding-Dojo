from dojo_app.config.mysqlconnection import connectToMySQL, database

class Dojo:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []
        
    @classmethod
    def get_all_dojos(cls):
        query = 'SELECT * FROM dojos;'
        results = connectToMySQL(database).query_db(query)
        dojos = []
        for dojo in results:
            dojos.append(cls(dojo))
        return dojos
    
    @classmethod
    def get_dojo_ninjas(cls, data):
        query = '''
        SELECT * FROM dojos
        LEFT JOIN ninjas 
        ON ninjas.dojo_id = dojos.id
        WHERE dojos.id = %(id)s;
        '''
        results = connectToMySQL(database).query_db(query, data)
        dojo = cls(results[0])
        for ninja in results:
            ninja_data = {
                "id": ninja['ninjas.id'],
                "first_name": ninja['first_name'],
                "last_name": ninja['last_name'],
                "age": ninja['age']
            }
            dojo.ninjas.append(ninja_data)
        return dojo
    
    @classmethod
    def create_new_dojo(cls, data):
        query = '''
        INSERT INTO dojos (name)
        VALUES (%(name)s);
        '''
        return connectToMySQL(database).query_db(query,data)