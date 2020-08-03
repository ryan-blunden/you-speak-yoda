import os
import ssl

from flask import Flask, render_template, request, jsonify, make_response
import requests

import settings

app = Flask(__name__)


@app.route('/', methods=['POST'])
def index():
    text = request.form['text']
    response = requests.post(
        settings.YODA_TRANSLATE_API_ENDPOINT,
        data={'text': text},
        headers={'X-Funtranslations-Api-Secret': settings.YODA_TRANSLATE_API_KEY}
    )

    if response.json().get('success'):
        return jsonify({'translation': response.json()['contents']['translated']}), response.status_code
    else:
        return jsonify(response.json()['error']), response.status_code


if __name__ == '__main__':
    app.run()
