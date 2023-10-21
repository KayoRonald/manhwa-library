import logging
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./manhwa.db"

engine = create_engine(
  SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def create_database():
  Base.metadata.create_all(bind=engine)

def get_db():
  db = SessionLocal()
  try:
    logging.info("Create database connection")
    yield db
  finally:
    logging.info("Database connection closed")
    db.close()