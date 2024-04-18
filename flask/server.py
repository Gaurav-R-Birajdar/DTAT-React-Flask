from flask import Flask, request, jsonify, flash
from flask_cors import CORS
import pyrebase

app = Flask(__name__)
CORS(app)

firebaseConfig = {
    "apiKey": "AIzaSyBdFrEGQNlKAroj4TD7DdcAjW8LlfDStJU",
    "authDomain": "dtat-react.firebaseapp.com",
    "databaseURL": "https://dtat-react-default-rtdb.asia-southeast1.firebasedatabase.app",
    "projectId": "dtat-react",
    "storageBucket": "dtat-react.appspot.com",
    "messagingSenderId": "350383106733",
    "appId": "1:350383106733:web:e38e00bfb5566f4555f424",
    "measurementId": "G-P4C53NSFPT"
}
firebase = pyrebase.initialize_app(firebaseConfig)  
auth = firebase.auth()

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    try:
        login = auth.sign_in_with_email_and_password(email, password)
        return jsonify ({"success" : True})
    except:
        return jsonify ({"success": False})

if __name__ == "__main__":
    app.run(debug=True)
