from books_app.config.mysqlconnection import connectToMySQL, database
from books_app.models import author,user

class Book:
    def __init__(self, data):
        self.id = data['id']
        self.author = None
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.users_who_liked_this_book = []
        
    @classmethod
    def get_all_books(cls):
        query = '''
        SELECT * FROM books
        LEFT JOIN authors
        ON books.author_id = authors.id;
        '''
        results = connectToMySQL(database).query_db(query)
        books = []
        for item in results:
            author_data = {
                'id':item['authors.id'],
                'first_name':item['first_name'],
                'last_name':item['last_name'],
                'created_at':item['authors.created_at'],
                'updated_at':item['authors.updated_at'],
            }
            this_book = cls(item)
            this_book.author = author.Author(author_data)
            books.append(this_book)
        return books
    
    @classmethod
    def get_all_who_liked_book(cls,data):
        query = '''
        SELECT * FROM books
        LEFT JOIN authors
        ON books.author_id = authors.id
        LEFT JOIN favorites 
        ON favorites.book_id = books.id
        LEFT JOIN users
        ON users.id = favorites.user_id
        WHERE books.id = %(id)s;
        '''
        results = connectToMySQL(database).query_db(query,data)
        book = cls(results[0])
        for user_who_liked_book in results:
            user_data = {
                'id': user_who_liked_book['users.id'],
                'first_name': user_who_liked_book['users.first_name'],
                'last_name': user_who_liked_book['users.last_name'],
                'created_at': user_who_liked_book['users.created_at'],
                'updated_at': user_who_liked_book['users.updated_at']
            }
            book.users_who_liked_this_book.append(user.User(user_data))
        return book
    
    @classmethod
    def create_new_book(cls,data):
        query = '''
        INSERT INTO books (author_id,title, num_of_pages)
        VALUES (%(author_id)s,%(title)s,%(num_of_pages)s)
        '''
        return connectToMySQL(database).query_db(query,data)