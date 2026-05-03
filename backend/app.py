from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Dummy data (for now)
hostels = [
    {"id": 1, "name": "Green Residency", "location": "Hyderabad", "price": 5000},
    {"id": 2, "name": "Sunshine PG", "location": "Bangalore", "price": 6000},
    {"id": 3, "name": "City Comfort PG", "location": "Chennai", "price": 5500}
]

@app.route('/')
def home():
    return "Backend is running!"

@app.route('/hostels', methods=['GET'])
def get_hostels():
    return jsonify(hostels)

@app.route('/book', methods=['POST'])
def book_hostel():
    data = request.json
    return jsonify({"message": "Booking successful", "data": data})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)