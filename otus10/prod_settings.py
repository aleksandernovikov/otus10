from .settings import *

ALLOWED_HOSTS = ['0.0.0.0']
DEBUG = True

SECRET_KEY = os.environ.get('SECRET_KEY')
