from psql_connect import get_engine, get_base
import sqlalchemy
from sqlalchemy.orm import Session
import numpy as np

engine = get_engine()
Base = get_base(engine)

print(Base.classes.keys())


from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def welcome():
    """List all available api routes."""
    return(
        f"/api/v1.0/books"
    )

@app.route("/api/v1.0/books")
def books():
    session = Session(engine)
    Authors = Base.classes.authors
    Books = Base.classes.books
    Imprints = Base.classes.imprints
    Lists = Base.classes.lists
    Results = Base.classes.results
    Publishers = Base.classes.publishers
    Ownership = Base.classes.ownership

    results = session.query(Results.weeks_on_list, Books.book_title).\
                        filter(Results.book_id == Books.book_id).\
                        filter(Results.published_date == '2023-05-21').\
                        order_by(Results.weeks_on_list.desc()).limit(10).all()
    session.close()

    best_books = list(np.ravel(results))
    return jsonify(best_books)

if __name__ == '__main__':
    app.run(debug=True)