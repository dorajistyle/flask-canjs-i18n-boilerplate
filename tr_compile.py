#!flask/bin/python
import os
# import sys
# if sys.platform == 'wn32':
#     pybabel = 'flask\\Scripts\\pybabel'
os.system('pybabel compile -f -d ./application/frontend/translations')