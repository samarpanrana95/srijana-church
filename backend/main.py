from fastapi import FastAPI

api = FastAPI()

@api.get("/")
def index(limit=9, offset=0):
    return {
        SELECT * FROM 
    }