from books_app.config.mysqlconnection import connectToMySQL, database
from books_app.models import book

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
        results = connectToMySQL(database).query_db(query)
        users = []
        for person in results:
            users.append(cls(person))
        return users
    
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
        results = connectToMySQL(database).query_db(query,data)
        user = cls(results[0])
        for fav in results:
            fav_data = {
                "id": fav['books.id'],
                'author_id': fav['author_id'],
                "title": fav['title'],
                "num_of_pages": fav['num_of_pages'],
                "created_at": fav['books.created_at'],
                "updated_at": fav['books.updated_at'],
            }
            user.favorites.append(book.Book(fav_data))
        return user
    
    @classmethod
    def create_new_user(cls,data):
        query = '''
        INSERT INTO users (first_name,last_name)
        VALUES (%(first_name)s,%(last_name)s);
        '''
        return connectToMySQL(database).query_db(query,data)