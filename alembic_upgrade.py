#!flask/bin/python
import os
os.system('alembic revision --autogenerate -m "Alembic initilized boilerplate tables."')
os.system('alembic upgrade head')