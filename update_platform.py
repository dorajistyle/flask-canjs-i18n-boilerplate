#!/usr/bin/python
import os
os.system('pip2 install -r requirements.txt')
os.system('alembic revision --autogenerate -m "Alembic initilized boilerplate tables."')
os.system('alembic upgrade head')
os.system('python2 install_node_modules.py')
os.system('python2 refresh_static.py')

