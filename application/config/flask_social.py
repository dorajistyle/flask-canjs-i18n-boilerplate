# Flask-Social Setting
#SOCIAL_CONNECT_ALLOW_VIEW = '/#!setting/connection'
SOCIAL_CONNECT_ALLOW_VIEW = '/#!'

SOCIAL_TWITTER = {
    'consumer_key': 'twitter app id',
    'consumer_secret': 'twitter app secret'
}
SOCIAL_FACEBOOK = {
    'consumer_key': 'facebook app id',
    'consumer_secret': 'facebook app secret',
    'request_token_params': {
        'scope': 'email,publish_actions'
    }
}
SOCIAL_FOURSQUARE = {
    'consumer_key': 'foursquare app id',
    'consumer_secret': 'foursquare app secret'
}
SOCIAL_GOOGLE = {
    'consumer_key': 'google app id',
    'consumer_secret': 'google app secret'
}