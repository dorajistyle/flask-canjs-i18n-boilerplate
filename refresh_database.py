#!/usr/bin/python
import os
# from application.settings import DB_USER_ID, DB_USER_PASSWORD, DB_HOST_NAME, DB_HOST_PORT, DB_NAME

os.system('pip2 install -r requirements.txt')
# os.system('mysqladmin -u'+str(DB_USER_ID)+' -h'+DB_HOST_NAME+' -P'+DB_HOST_PORT+' -p'+DB_USER_PASSWORD+' drop '+str(DB_NAME))
# os.system('mysqladmin -u'+str(DB_USER_ID)+' -h'+DB_HOST_NAME+' -P'+DB_HOST_PORT+' -p'+DB_USER_PASSWORD+' create '+str(DB_NAME))
os.chdir('./alembic/versions')
os.system('rm *')
os.chdir('../..')
os.system('alembic revision --autogenerate -m "Alembic initilized boilerplate tables."')
os.system('alembic upgrade head')
os.system('python2 install_node_modules.py')
os.system('python2 refresh_static.py')
from manage import manager
manager.run(default_command='init_user')
