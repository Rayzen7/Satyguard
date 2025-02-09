from flask import Flask, request, jsonify
import google.generativeai as genai
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

genai.configure(api_key="AIzaSyAOssw0JcNNkQ6K01TCpNyXGhryXIudseY")
model = genai.GenerativeModel("gemini-1.5-flash")

def get_custom_response(prompt):
    if "who are you" in prompt.lower():
        return "I'm the Satybot, your mental health assistant. How can I help you today?"
    if "siapa kamu?" in prompt.lower():
        return "Saya Satybot, asisten kesehatan mental Anda. Apa yang bisa saya bantu hari ini?"
    if "kamu siapa?" in prompt.lower():
        return "Saya Satybot, asisten kesehatan mental Anda. Apa yang bisa saya bantu hari ini?"
    response = model.generate_content(prompt)
    return response.text

@app.route('/chat', methods=['POST'])
def chat_post():
    data = request.json
    prompt = data.get('prompt')
    if not prompt:
        return jsonify({"error": "Prompt field is required"}), 400
    response_text = get_custom_response(prompt)
    return jsonify({"response": response_text})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=7000)