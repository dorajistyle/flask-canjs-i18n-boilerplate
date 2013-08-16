# coding=UTF-8
"""
    tests.factory
    ~~~~~~~~~

    api factory package
"""

from application.core import db

def create_sqlalchemy_model_function(class_to_create, *args, **kwargs):
    entity = class_to_create(*args, **kwargs)
    db.session.add(entity)
    db.session.commit()
    return entity
