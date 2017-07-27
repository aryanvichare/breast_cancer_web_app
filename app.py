from flask import Flask, url_for, render_template, redirect, request, json,jsonify

DEBUG = True
app = Flask(__name__)


@app.route("/")
def index():
    return render_template('home.html',flag = True)

@app.route("/run")
def run():
    a = [i*2 for i in range(0,10)]
    b = [i for i in range(1,20)]
    result = a+b
    return render_template('run.html',result=result)

@app.route('/receiver', methods = ['POST'])
def worker():
    if request.method == 'POST':
        data = request.get_json(force=True)
        result = ''
        temo = list(data.items())
        asd = temo[1][1]
        # print(temo[1][1][2])
        print(asd[2])
        return result


if __name__ == '__main__':
    app.debug = DEBUG
    app.secret_key = 'qwerty12345'
    #host,pt="192.168.10.41",port=1234
    app.run("0.0.0.0", 5010)
