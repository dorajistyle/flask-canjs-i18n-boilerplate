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
* Cross Browser Compatibility (IE7, IE8, IE9, IE10, Firefox, Chrome, Opera..)
* Do you need more Features? Fork it and improve it! :D


## Live application
[http://flask-canjs-i18n-boilerplate.hp.af.cm/](http://flask-canjs-i18n-boilerplate.hp.af.cm/)


## How it works?

![flask-canjs-i18n-boilerplate](https://f.cloud.github.com/assets/1202809/914493/b584032c-fe3b-11e2-83c0-05b83e8959ba.png)


## Environment

### Client side
* [Canjs](http://canjs.com/), Client-side JavaScript Framework.
* [RequireJS](http://requirejs.org/), JavaScript file and module loader.
* [RequireJS Optimizer](http://requirejs.org/docs/optimization.html), Optimization tool of RequireJS.
* [Initializr](http://www.initializr.com/), HTML5 templates generator.
* [Bootstrap](http://twitter.github.io/bootstrap/), Front-end framework.
* [Bootstrap-ie7](https://github.com/coliff/bootstrap-ie7), Bootstrap 3 for IE7.
* [mustache](http://mustache.github.io/), Logic-less templates.
* [i18next](http://i18next.com/), JavaScript translating toolkit.
* [Font Awesome](http://fortawesome.github.io/Font-Awesome/), It gives you scalable vector icons that can instantly be customized.
* [typeahead.js](https://github.com/twitter/typeahead.js),  It is a fast and fully-featured autocomplete library.
* [spin.js](http://fgnass.github.io/spin.js/), It dynamically creates spinning activity indicators that can be used as resolution-independent replacement for AJAX loading GIFs.
* [Placeholders.js](http://jamesallardice.github.io/Placeholders.js/), It is a JavaScript polyfill for the HTML5 placeholder attribute.
* [Jade(pyjade)](https://github.com/SyrusAkbary/pyjade), High performance port of Jade-lang for python.
* [jQuery](http://jquery.com/), It is a fast, small, and feature-rich JavaScript library.
* [jQuery BBQ](http://benalman.com/projects/jquery-bbq-plugin/), It leverages the HTML5 hashchange event to allow simple, yet powerful bookmarkable #hash history.

### Server side
* [Flask](http://flask.pocoo.org/), Microframework for Python based on Werkzeug, Jinja 2 and good intentions.
* [Flask-Babel](http://pythonhosted.org/Flask-Babel/), Extension to Flask that adds i18n and l10n support to any Flask application.
* [Flask-Gravatar](https://pypi.python.org/pypi/Flask-Gravatar), It's small and simple integration gravatar into flask.
* [Flask-Security](http://pythonhosted.org/Flask-Security/),It allows you to quickly add common security mechanisms to your Flask application.
* [Flask-Social](http://pythonhosted.org/Flask-Social/), Oauth provider login and APIs for use with Flask-Security.
* [Flask-Assets](http://elsdoerfer.name/docs/flask-assets/), Flask-Assets helps you to integrate webassets into your Flask application.
* [Flask-SQLAlchemy](http://pythonhosted.org/Flask-SQLAlchemy/), Extension for Flask that adds support for SQLAlchemy.
* [Flask-WTF](https://flask-wtf.readthedocs.org/en/latest/), It offers simple integration with WTForms.
* [Flask-Cache](http://pythonhosted.org/Flask-Cache/), It helps you to integrate cache into your Flask appication.
* [Alembic](http://alembic.readthedocs.org/en/latest/), Alembic is a lightweight database migration tool for usage with the SQLAlchemy Database Toolkit for Python.
* [Celery](http://www.celeryproject.org/), Celery is an asynchronous task queue/job queue based on distributed message passing.

### Debugging & Testing
* [flask-debugtoolbar](http://flask-debugtoolbar.readthedocs.org/en/latest/), It is a port of the excellent django-debug-toolbar for Flask applications.
* [nose](https://nose.readthedocs.org/en/latest/index.html), It is nicer testing for python.
* [BusterJS](http://docs.busterjs.org/en/latest/#), JavaScript testing toolkit.

### Documentation Generating
* [Sphinx](http://sphinx-doc.org/), Sphinx is a tool that makes it easy to create intelligent and beautiful documentation.
* [JSDoc](https://github.com/jsdoc3/jsdoc), An inline API documentation processor for JavaScript.


## Installation

### Install tools
* [virtualenv](https://python-guide.readthedocs.org/en/latest/dev/virtualenvs/#virtualenv), It is a tool to create isolated Python environments.
* [virtualenvwrapper](https://python-guide.readthedocs.org/en/latest/dev/virtualenvs/#virtualenvwrapper), It' provides a set of commands which makes working with virtual environments much more pleasant.

### Clone the project
    $ git clone https://github.com/dorajistyle/flask-canjs-i18n-boilerplate.git
    $ cd flask-canjs-i18n-boilerplate.git

### Create virtualenv for the project
    $ mkvirtualenv flask-canjs-i18n-boilerplate

### Install libraries
    $ pip install -r requirements.txt

### Migrate database
    $ alembic revision --autogenerate -m "Alembic initilized boilerplate tables."
    $ alembic upgrade head

### Add administrator user
You can login with 'admin@github.com' and 'password'.

    $ python manage.py init_user

### Setting

    You should set values properly.(database, mail, social providers...)

* application/settings.py contain server side settings.
* application/frontend/static/js/settings.js contain client side settings.
* ./alembic.ini contain alembic settings.

### Translation
* Server side translations(Babel) in applications/frontend/translations
* Client side translations(i18next) in applications/frontend/static/locales

#### Babel translations compile
    $ python tr_compile.py


## Usage

### Run the application
    $ python wsgi.py

### Generate documents
    $ python generate_documents.py

### Optimize static folder
You should install Nodejs and RequireJS.
If you want detail document, Click [RequireJS Optimizer](http://requirejs.org/docs/optimization.html).

    $ optimize_static.sh

### Tests
    $ nosetests

    You can use test script as well.

    $ python run_nosetests.py





________________________

## Attributions

Flask-canjs-i18n-boilerplate is under the MIT license.