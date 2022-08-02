from books_app.config.mysqlconnection import connectToMySQL, database

class Book:
    def __init__(self, data):
        self.id = data['id']
        self.author_id = data['author_id']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.favorites = []
        
    @classmethod
    def get_all_books(cls):
        query = '''
        SELECT * FROM books
        LEFT JOIN authors
        ON books.author_id = authors.id;
        '''
        results = connectToMySQL(database).query_db(query)
        return results
    
    @classmethod
    def get_all_who_liked_book(cls,data):
        query = '''
        SELECT *, authors.first_name as a_f_name,
        authors.last_name as a_l_name FROM books
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
        for fav in results:
            book_data = {
                'author_first_name': fav['a_f_name'],
                'author_last_name': fav['a_l_name'],
                'user_id': fav['users.id'],
                'user_first_name': fav['users.first_name'],
                'user_last_name': fav['users.last_name']
            }
            book.favorites.append(book_data)
        return book
    
    @classmethod
    def create_new_book(cls,data):
        query = '''
        INSERT INTO books (author_id,title, num_of_pages)
        VALUES (%(author_id)s,%(title)s,%(num_of_pages)s)
        '''
        return connectToMySQL(database).query_db(query,data)