from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from .config import Config

db = SQLAlchemy()
bcrypt = Bcrypt()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    
    CORS(app)
    '''
    app.config.from_object(Config)
    
    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)
    '''
    with app.app_context():
        from .routes.auth_routes import auth_bp
        from .routes.test_routes import test_bp
        app.register_blueprint(auth_bp)
        app.register_blueprint(test_bp)

        '''
        Acá agregamos los blueprints(son como módulos que creas).
        Los blueprints son declarados en las rutas de /routes/. Faltaría agregar el blueprint de chat.

        from .routes.chat_routes import chat_bp
        app.register_blueprint(chat_bp)

        '''


        #db.create_all()

    return app
