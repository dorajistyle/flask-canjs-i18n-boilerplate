#!flask/bin/python
import os
os.system('jsdoc -c jsdoc.json')
os.chdir('./docs')
os.system('make html')