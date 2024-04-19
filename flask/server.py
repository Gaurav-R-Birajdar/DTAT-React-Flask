from flask import Flask, request, jsonify, flash
from flask_cors import CORS
import pyrebase
import firebase_admin
from firebase_admin import credentials, firestore, auth, storage

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

cred = credentials.Certificate("dtat-react-firebase-adminsdk-5pass-00d39187ee.json")
firebase_admin.initialize_app(cred, {
    "apiKey": "AIzaSyBdFrEGQNlKAroj4TD7DdcAjW8LlfDStJU",
    "authDomain": "dtat-react.firebaseapp.com",
    "databaseURL": "https://dtat-react-default-rtdb.asia-southeast1.firebasedatabase.app",
    "projectId": "dtat-react",
    "storageBucket": "dtat-react.appspot.com",
    "messagingSenderId": "350383106733",
    "appId": "1:350383106733:web:e38e00bfb5566f4555f424",
    "measurementId": "G-P4C53NSFPT"
})


firebase = pyrebase.initialize_app(firebaseConfig)  
auth = firebase.auth()
db = firestore.client()

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    try:
        auth.sign_in_with_email_and_password(email, password)
        return jsonify ({"success" : True})
    except:
        return jsonify ({"success": False})
    
@app.route("/register", methods=['POST'])
def register():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    name = data.get("userName")
    circle = data.get("circleName")
    confirm = data.get("confirmPassword")

    print(email, password)

    try:
        if(password == confirm):
            auth.create_user_with_email_and_password(email, password)
            data = {
                "name" : name,
                "circle" : circle
            }
            db.collection("UserDetails").document().set(data)
            return jsonify({'success':True})
    except:
        return jsonify({"success":False})


@app.route("/change_password", methods=['POST'])
def change_password():
    data = request.json
    email = data.get("email")

    try:
        auth.send_password_reset_email(email)
        return jsonify({"success":True})
    except:
        return jsonify({"message": "Something went wrong"})


@app.route("/fetchEmployee", methods=['POST'])
def fetchEmployee():
    data = request.json
    circle = data.get("circle")
    print(circle)

    employees = []

    try:
        query = db.collection("UserDetails").where("circle", "==", circle).get()
        for doc in query:
            employees.append(doc.to_dict()["name"])
            return jsonify({"success":True,"employeesSent":employees})
    except Exception as e:
        return jsonify({"success":False})


if __name__ == "__main__":
    app.run(debug=True)
