# coding=UTF-8
"""
    application.api_v1.following
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    following API module

"""
from flask import request, Blueprint
from application.api_v1 import route
from application.services import users

bp = Blueprint('following', __name__, url_prefix='/following')


@route(bp, '', methods=['GET'])
def following():
    """
    Get following with pagination.

    :return: following, has_next, current_page
    """
    user = users.get_or_404(request.values.get('id'))
    current_page = int(request.values.get('current_page', 1))
    following, has_next = users.following(user, current_page)
    return {'following': following, 'has_next': has_next, 'current_page': current_page}
