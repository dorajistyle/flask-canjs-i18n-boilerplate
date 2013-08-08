# coding=UTF-8
"""
    application.api_v1.followers
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    followers API module

"""
from flask import request, Blueprint
from application.api_v1 import route, login_required
from application.services import users

bp = Blueprint('followers', __name__, url_prefix='/followers')


@route(bp, '', methods=['POST'])
@login_required
def create():
    """
    Follow User.

    @login_required

    :return: status(True : follow success, False : follow failed)
        email(following user email)
    """
    user = users.get_or_404(request.form.get('id'))
    users.follow(user)
    return {'email': user.email}


@route(bp, '/<user_id>', methods=['DELETE'])
@login_required
def destroy(user_id):
    """
    Unfollow User.

    @login_required

    :param user_id:
    :return: status(True : unfollow success, False : unfollow failed)
        email(unfollowing user email)
    """
    user = users.get_or_404(user_id)
    users.unfollow(user)
    return {'email': user.email}


@route(bp, '', methods=['GET'])
def followers():
    """
    Get followers with pagination.

    :return: followers, has_next, current_page
    """
    user = users.get_or_404(request.values.get('id'))
    current_page = int(request.values.get('current_page', 1))
    followers, has_next = users.followers(user, current_page)
    return {'followers': followers, 'has_next': has_next, 'current_page': current_page}