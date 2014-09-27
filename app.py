from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/")
def cover():
    return render_template('cover.html', cheeps=cheeps)

if __name__ == '__main__':
    app.run(debug=True)
