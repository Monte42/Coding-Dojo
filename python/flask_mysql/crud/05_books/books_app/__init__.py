from flask import Flask

def parse_list(all_items,liked_items):
    all_likes_id = []
    all_other_id = []
    for item in liked_items:
        all_likes_id.append(item.id)
    for item in all_items:
        if item.id not in all_likes_id:
            all_other_id.append(item)
    return all_other_id

app = Flask(__name__)
app.secret_key = '636 King of the Streets'