from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process_data():
    data = request.form.get('username')
    return jsonify({"message": f"Hello {data}, your data has been processed!"})

@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Hello Mayank, your data has been getting!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

