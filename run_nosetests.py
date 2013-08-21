#!flask/bin/python
import os
test_name = raw_input('Leave a value blank to test all. When you want to test specific one, enter a test name:')
test = ''
if len(test_name) > 0:
    test = ' ./tests/api/%s_tests.py' % test_name
print('nosetests -v --nologcapture%s &>./test.log' % test)
os.system('rm ./logs/test.log')
os.system('nosetests -v --nologcapture%s &>./logs/test.log' % test)
os.system('echo "----------------------------------------------------------------------" &>>./logs/test.log')
os.system('echo "Tested at" &>>./logs/test.log')
os.system('date +"%m-%d-%Y %T" &>>./logs/test.log')