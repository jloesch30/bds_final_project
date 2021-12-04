import time
from flask import Flask

app = Flask(__name__)

# serve all of my data stuff
# I will train the model offline and export it via joblib

@app.route('/time')
def get_current_time():
    return {'time': time.time()}
