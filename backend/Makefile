SHELL = /usr/bin/env bash

venv-create:
	python3 -m venv ~/.virtualenvs/yodaspeak-backend

venv-install:
	source ~/.virtualenvs/yodaspeak-backend/bin/activate; pip install pip --upgrade -r requirements.txt

venv-activate:
	@echo "Run command: source ~/.virtualenvs/yodaspeak-backend/bin/activate"

server:
	source ~/.virtualenvs/yodaspeak-backend/bin/activate; doppler run -- ./bin/server
