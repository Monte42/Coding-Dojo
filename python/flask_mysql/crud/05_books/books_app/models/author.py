from unittest import result
from books_app.config.mysqlconnection import connectToMySQL, database

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
        return results
    
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
        for book in results:
            book_data = {
                'id': book['books.id'],
                'title': book['title'],
                'num_of_pages': book['num_of_pages']
            }
            author.books.append(book_data)
        return author
    
    @classmethod
    def create_new_author(cls,data):
        query = '''
        INSERT INTO authors (first_name, last_name)
        VALUES (%(first_name)s,%(last_name)s);
        '''
        return connectToMySQL(database).query_db(query,data)