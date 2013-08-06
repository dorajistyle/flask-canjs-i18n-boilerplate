# Flask-Canjs-i18n-Boilerplate

## Flask-Canjs-i18n-Boilerplate

It's a simple multilingual application boilerplate for developer who interested in Canjs and Python Flask combination.
Flask part is inspired by [Matt Wright](https://github.com/mattupstate)'s [article](http://mattupstate.com/python/2013/06/26/how-i-structure-my-flask-applications.html).


## Features
* Flask/Canjs combination.
* Internationalization ready.
* Uesr CRUD implementation.
* User following/followers function implementation.
* Social connection implementation.
    1. facebook
    2. others (TODO)
* RESTful API implementation.
* Responsive web design.
* Google's crawler friendly url('#!').
* Generate document easily.(Sphinx)
* Do testing easily. (nosetests)
* Do you need more Features? Fork it and add it! :D


## How it works?

![flask-canjs-i18n-boilerplate](https://f.cloud.github.com/assets/1202809/914493/b584032c-fe3b-11e2-83c0-05b83e8959ba.png)


## Environment

### Client side
* [Canjs](http://canjs.com/), Client-side JavaScript Framework.
* [RequireJS](http://requirejs.org/), JavaScript file and module loader.
* [Initializr](http://www.initializr.com/), HTML5 templates generator.
* [Bootstrap](http://twitter.github.io/bootstrap/), Front-end framework.
* [mustache](http://mustache.github.io/), Logic-less templates.
* [i18next](http://i18next.com/), JavaScript translating toolkit.
* [spin.js](http://fgnass.github.io/spin.js/) Spin.js dynamically creates spinning activity indicators that can be used as resolution-independent replacement for AJAX loading GIFs.

### Server side
* [Flask](http://flask.pocoo.org/), Microframework for Python based on Werkzeug, Jinja 2 and good intentions.
* [Jade(pyjade)](https://github.com/SyrusAkbary/pyjade), High performance port of Jade-lang for python.
* [Flask-Babel](http://pythonhosted.org/Flask-Babel/), Extension to Flask that adds i18n and l10n support to any Flask application.
* [Flask-Gravatar](https://pypi.python.org/pypi/Flask-Gravatar), It's small and simple integration gravatar into flask.
* [Flask-Security](http://pythonhosted.org/Flask-Security/),It allows you to quickly add common security mechanisms to your Flask application.
* [Flask-Social](http://pythonhosted.org/Flask-Social/), Oauth provider login and APIs for use with Flask-Security
* [Flask-Assets](http://elsdoerfer.name/docs/flask-assets/), Flask-Assets helps you to integrate webassets into your Flask application.
* [Flask-SQLAlchemy](http://pythonhosted.org/Flask-SQLAlchemy/), Extension for Flask that adds support for SQLAlchemy.
* [Alembic](http://alembic.readthedocs.org/en/latest/), Alembic is a lightweight database migration tool for usage with the SQLAlchemy Database Toolkit for Python.

### Debugging & Testing
* [flask-debugtoolbar](http://flask-debugtoolbar.readthedocs.org/en/latest/), It is a port of the excellent django-debug-toolbar for Flask applications.
* [nose](https://nose.readthedocs.org/en/latest/index.html), It is nicer testing for python.
* [BusterJS](http://docs.busterjs.org/en/latest/#), JavaScript testing toolkit.

### Documentation Generating
* [Sphinx](http://sphinx-doc.org/), Sphinx is a tool that makes it easy to create intelligent and beautiful documentation.
* [JSDoc](https://github.com/jsdoc3/jsdoc), An inline API documentation processor for JavaScript.


## Installation

### Libraries installation.
    $ pip install -r requirements.txt

### Database migration.
    $ alembic revision --autogenerate -m "Alembic initilized boilerplate tables."
    $ alembic upgrade head

### Setting

    You should set values properly.(database, mail, social providers...)

* application/settings.py contain server side settings.
* application/frontend/static/js/settings.js contain client side settings.
* ./alembic.ini contain alembic settings.

### Translations
* Server side translations(Babel) in applications/frontend/translations
* Client side translations(i18next) in applications/frontend/static/locales

#### Babel translations compile
    $ python tr_compile.py


## Usage

### Run the application
    $ python wsgi.py

### Run the application profile
    $ python profile.py

### Generate documents
    $ python generate_documents.py

### Tests
    $ nosetests



________________________

## Attributions

Flask-canjs-i18n-boilerplate is under the MIT license.