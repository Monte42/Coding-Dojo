from books_app.config.mysqlconnection import connectToMySQL, database
from books_app.models import book

class Author:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.books = []
        
    @classmethod
    def get_all_authors(cls):
        query = '''
        SELECT * FROM authors;
        '''
        results = connectToMySQL(database).query_db(query)
        authors = []
        for auth in results:
            authors.append(cls(auth))
        return authors
    
    @classmethod
    def get_author_and_books(cls,data):
        query = '''
        SELECT * FROM authors
        LEFT JOIN books 
        ON books.author_id = authors.id
        WHERE authors.id = %(id)s;
        '''
        results = connectToMySQL(database).query_db(query,data)
        author = cls(results[0])
        for result in results:
            book_data = {
                'id': result['books.id'],
                'author_id': result['author_id'],
                'title': result['title'],
                'num_of_pages': result['num_of_pages'],
                'created_at': result['books.created_at'],
                'updated_at': result['books.updated_at']
            }
            author.books.append(book.Book(book_data))
        return author
    
    @classmethod
    def create_new_author(cls,data):
        query = '''
        INSERT INTO authors (first_name, last_name)
        VALUES (%(first_name)s,%(last_name)s);
        '''
        return connectToMySQL(database).query_db(query,data)