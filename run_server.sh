#!/bin/sh
/usr/bin/mysqld_safe &
sleep 10s
python wsgi.py
