from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)


@app.route("/")
def index():
    # title: "Richard"
    return render_template("index.html")


@app.route("/about")
def about():
    nam = ["Cory", "Kim", "Grant", "Greg", "Jessica", "Richard"]
    return render_template("about.html", nam=nam)


if __name__ == "__main__":
    app.run(debug=True)
