from books_app.config.mysqlconnection import MySQLConnection,database

class Favorite:
    def __init__(self,data):
        self.book_id = data['book_id']
        self.user_id = data['user_id']
        
    @classmethod
    def create_new_favorite(cls,data):
        query = '''
        INSERT INTO favorites (book_id, user_id)
        VALUES (%(book_id)s,%(user_id)s);
        '''
        return MySQLConnection(database).query_db(query,data)