from flask import Flask, request, jsonify
from flask_cors import CORS
from calculator import add

app = Flask(__name__)
CORS(app)

@app.route("/api/calculate", methods=["POST"])
def calculate():
    data = request.get_json()
    numbers = data.get("numbers", "")
    try:
        result = add(numbers)
        return jsonify({"result": result}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
