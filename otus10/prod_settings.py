from .settings import *

ALLOWED_HOSTS = []
DEBUG = False

SECRET_KEY = os.environ.get('SECRET_KEY')
