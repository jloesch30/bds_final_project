import time
from flask import Flask, request
import joblib

app = Flask(__name__)

# serve all of my data stuff
# I will train the model offline and export it via joblib

@app.route('/time/', methods=['POST', 'GET'])
def get_current_time():
    return {'time': time.time()}

# use model to make prediction
@app.route('/stroke/', methods=['POST'])
def get_stroke_info():

    if request.method == 'POST':
        json = request.json
        # get data from the form
        bmi = json['bmi']
        age = json['age']
        hyperTension = json['hyperTension']
        heartDisease = json['heartDisease']
        avgGlucose = json['avgGlucose']

        # use machine learning model to predict stroke here

    
    return {'testing': 'hello there'}