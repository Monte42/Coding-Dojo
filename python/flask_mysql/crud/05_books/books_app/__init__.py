from flask import Flask

def parse_list(arr,key):
    items = []
    for item in arr:
        items.append(item[key])
    return items

app = Flask(__name__)
app.secret_key = '636 King of the Streets'