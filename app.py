from psql_connect import get_engine, get_base
import sqlalchemy
from sqlalchemy.orm import Session
from flask import Flask, jsonify
from flask_cors import CORS
import numpy as np

# Flask set-up
app = Flask(__name__)
CORS(app)

# Sqlalchemy set-up
engine = get_engine()
Base = get_base(engine)

# Landing route
@app.route("/")
def welcome():
    # List available api routes
    return(
        f"/api/v1.0/books"
    )

# Best books route
@app.route("/api/v1.0/books")
def books():
    # Start sqlalchemy session
    session = Session(engine)

    # Assign table classes 
    Authors = Base.classes.authors
    Books = Base.classes.books
    Imprints = Base.classes.imprints
    Lists = Base.classes.lists
    Results = Base.classes.results
    Publishers = Base.classes.publishers
    Ownership = Base.classes.ownership

    # Query SQL database
    results = session.query(Books.book_title, Books.book_image, Books.book_description, Authors.author_name, Imprints.imprint_name, Publishers.publisher_name, Lists.list_name, Results.weeks_on_list).\
                        filter(Authors.author_id == Books.author_id).\
                        filter(Imprints.imprint_id == Books.imprint_id).\
                        filter(Ownership.imprint_id == Books.imprint_id).\
                        filter(Publishers.publisher_id == Ownership.publisher_id).\
                        filter(Results.book_id == Books.book_id).\
                        filter(Lists.list_id == Results.list_id).\
                        order_by(Results.published_date.desc(), Results.weeks_on_list.desc()).all()
 
    # Close sqlalchemy session
    session.close()
    
    # Return jsonified results
    return jsonify([dict(_) for _ in results])

if __name__ == '__main__':
    app.run(debug=True)