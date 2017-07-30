from flask import Flask, url_for, render_template, redirect, request, flash
from predict import prediction

DEBUG = True
app = Flask(__name__)


@app.route("/")
def index():
    return render_template('home.html',flag = True)

@app.route("/run")
def run():
    return render_template('run.html')

@app.route('/receiver', methods = ['POST'])
def worker():
    if request.method == 'POST':
        data = request.get_json(force=True)
        result = ''
        data = dict(data.items())
        SIZE_TABLE = int(data['count'])
        data = list(data.values())
        _keys = list(data[0][1].keys())
        vector_attributes = list()
        for index in range(1,SIZE_TABLE):
            print(data[0][index][_keys[1]])
            vector_attributes.append(int(data[0][index][_keys[1]]))
        print(vector_attributes)
        print("PREDICT")
        PRED = prediction(vector_attributes)
        print(PRED)
        # return result
        # if PRED[0] == 'm':
        #     flash('Likely to be ' + PRED.upper(),"danger")
        # elif PRED[0] == 'b':
        #     flash('Likely to be ' + PRED.upper(),"success")
        # return redirect(url_for('run'),PRED)
        return PRED

if __name__ == '__main__':
    app.debug = DEBUG
    app.secret_key = 'qwerty12345'
    #host,pt="192.168.10.41",port=1234
    app.run("0.0.0.0", 5010)
