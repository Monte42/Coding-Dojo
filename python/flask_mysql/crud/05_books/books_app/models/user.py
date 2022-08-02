from books_app.config.mysqlconnection import MySQLConnection, database

class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.favorites = []
        
    @classmethod
    def get_all_users(cls):
        query = '''
        SELECT * FROM users;
        '''
        results = MySQLConnection(database).query_db(query)
        return results
    
    @classmethod
    def get_user_favorite_books(cls,data):
        query ='''
        SELECT * FROM users
        LEFT JOIN favorites 
        ON favorites.user_id = users.id
        LEFT JOIN books
        ON books.id = favorites.book_id
        WHERE users.id = %(id)s;
        '''
        results = MySQLConnection(database).query_db(query,data)
        user = cls(results[0])
        for fav in results:
            fav_data = {
                "book_id": fav['books.id'],
                "title": fav['title'],
                "num_of_pages": fav['num_of_pages']
            }
            user.favorites.append(fav_data)
        return user
    
    @classmethod
    def create_new_user(cls,data):
        query = '''
        INSERT INTO users (first_name,last_name)
        VALUES (%(first_name)s,%(last_name)s);
        '''
        return MySQLConnection(database).query_db(query,data)