# install psycopg2 if needed
# !pip install psycopg2

# Dependencies
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from local_postgres import postgresql as pg

# Define a function that returns our SQLAlchemy engine 
def get_engine():
    pg_path = f"postgresql+psycopg2://{pg['user']}:{pg['password']}@{pg['host']}:{pg['port']}/{pg['db']}"
    engine = create_engine(pg_path)
    return engine

# Define a function that returns an automap base which reflects our Postgres database tables 
def get_base(engine):
    Base = automap_base()
    Base.prepare(engine, reflect=True)
    return Base
