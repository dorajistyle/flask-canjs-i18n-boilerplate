#!flask/bin/python
import os
os.system('redis-server')
os.system('celery -A application.tasks worker')