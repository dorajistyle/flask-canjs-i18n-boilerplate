#!/usr/bin/python
import os
os.system('pip2 install -r requirements.txt')
os.system('mysqladmin -uroot drop fcib_dev')
os.system('mysqladmin -uroot create fcib_dev')
os.chdir('./alembic/versions')
os.system('rm *')
os.chdir('../..')
os.system('alembic revision --autogenerate -m "Alembic initilized boilerplate tables."')
os.system('alembic upgrade head')
os.system('python2 install_node_modules.py')
os.system('python2 refresh_static.py')
from manage import manager
manager.run(default_command='init_user')
