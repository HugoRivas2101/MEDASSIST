from flask import jsonify
from ..models.user import User
from .. import db, bcrypt
from flask_jwt_extended import create_access_token

class AuthController:

    @staticmethod
    def login(data):
        email = data.get('email')
        password = data.get('password')
        
        '''
        user = User.query.filter_by(email=email).first()
        if user and bcrypt.check_password_hash(user.password, password):
            access_token = create_access_token(identity={'username': user.username, 'email': user.email})
            return jsonify(access_token=access_token), 200
        else:
            return jsonify({"msg": "Invalid credentials"}), 401
        '''
        if email=='test' and password=='test':
            return jsonify({"msg":"Valid credentials"}),200
        else:
            return jsonify({"msg": "Invalid credentials"}), 401