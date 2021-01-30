from flask import Flask, render_template, request
from api.calculator import calculator

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])

def index():
  return calculator()

app.run(debug=True)