import time
from flask import Flask, request
import numpy as np
import joblib
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder


app = Flask(__name__)

@app.route('/time/', methods=['POST', 'GET'])
def get_current_time():
    return {'time': time.time()}

# use model to make prediction
@app.route('/stroke/', methods=['POST'])
def get_stroke_info():

    if request.method == 'POST':
        json = request.json
        print(json)
        bmi = float(json['bmi'])
        age = float(json['age'])
        hyperTension = int(json['hyperTension'])
        heartDisease = int(json['heartDisease'])
        gender = int(json['gender'])
        everMarried = int(json['everMarried'])
        workType = int(json['workType'])
        smokingStatus = int(json['smokingStatus'])
        residenceType = int(json['residenceType'])
        avgGlucose = float(json['avgGlucose'])

        # use machine learning model to predict stroke here
        return pre_process_and_predict(bmi, age, hyperTension, heartDisease, avgGlucose, gender, everMarried, workType, smokingStatus, residenceType)
        
    
    return {'NaN': 'NaN'}

def pre_process_and_predict(bmi, age, hyperTension, heartDisease, avgGlucose, gender, everMarried, workType, smokingStatus, residenceType):
        test_data = [gender, age, hyperTension, heartDisease, everMarried, workType, residenceType, avgGlucose, bmi, smokingStatus]

        print(test_data)

        test_data = np.array(test_data)

        print("I am here")

        with open('./model/XGBoost_model.pkl', 'rb') as file:
            trained_model = joblib.load(file)
            print(trained_model)

            # transform
            test_data = trained_model['ct'].transform(test_data.reshape(1, -1))
            print(test_data) 
        
            # predict
            pred = trained_model['classifier'].predict_proba(test_data)[:, 1]
        
            return {'prediction': str(round(pred[0] * 100, 4)), 'testData': str(test_data)} 

