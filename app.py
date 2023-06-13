# from psql_connect import get_engine, get_base
import sqlalchemy
from sqlalchemy.orm import Session
from flask import Flask, jsonify
from flask_cors import CORS
import numpy as np
from sqlalchemy.ext.automap import automap_base
from sqlalchemy import create_engine, func


# Flask set-up
app = Flask(__name__)
CORS(app)

# # Sqlalchemy set-up
engine = create_engine("sqlite:///nytdata.sqlite")

# # reflect an existing database into a new model
Base = automap_base()

# # reflect the tables
Base.prepare(autoload_with=engine, reflect=True)

# print(Base.classes.keys)


# session= Session(engine)

# Assign table classes 
# Authors = Base.classes.Authors
# Books = Base.classes.Books
# Imprints = Base.classes.Imprints
# Lists = Base.classes.Lists
# Results = Base.classes.Results
# Publishers = Base.classes.Publishers
# Ownership = Base.classes.Ownership

# engine = get_engine()
# Base = get_base(engine)

print(Base.classes.keys())

# # Landing route
# @app.route("/")
# def welcome():
#     # List available api routes
#     return(
#         f"/api/v1.0/books"
#     )

# @app.route("/api/v1.0/book_longest/")
# def book_longest_per_list():
    
#     query = session.query(Results.weeks_on_list, Books.book_title, Publishers.publisher_name).\
#         join(Books, Results.book_id == Books.book_id).\
#         filter(Results.rank == 1).\
#         order_by(Results.weeks_on_list.desc()).limit(10).all()
#     book_longest = [{"weeks_on_list": weeks, "book_title": title, "publisher_name": publisher}
#                              for weeks, title, publisher in query]

#     return jsonify(book_longest)

# Best books route
# @app.route("/api/v1.0/books")
# def books():
#     # Start sqlalchemy session
#     session = Session(engine)

#     # Assign table classes 
#     Authors = Base.classes.authors
#     Books = Base.classes.books
#     Imprints = Base.classes.imprints
#     Lists = Base.classes.lists
#     Results = Base.classes.results
#     Publishers = Base.classes.publishers
#     Ownership = Base.classes.ownership

#     # Query SQL database
#     results = session.query(Books.book_title, Books.book_image, Books.book_description, Authors.author_name, Imprints.imprint_name, Publishers.publisher_name, Lists.list_name, Results.published_date, Results.rank, Results.weeks_on_list).\
#                         filter(Authors.author_id == Books.author_id).\
#                         filter(Imprints.imprint_id == Books.imprint_id).\
#                         filter(Ownership.imprint_id == Books.imprint_id).\
#                         filter(Publishers.publisher_id == Ownership.publisher_id).\
#                         filter(Lists.list_id == Results.list_id).\
#                         filter(Results.book_id == Books.book_id).\
#                         order_by(Results.published_date.desc(), Results.weeks_on_list.desc()).all()
 
#     # Close sqlalchemy session
#     session.close()
    
#     # Return jsonified results
#     return jsonify([dict(_) for _ in results])

# if __name__ == '__main__':
#     app.run(debug=True)