#!/bin/bash
cd /home/davidgram/frontend
yarn
yarn start &
cd /home/davidgram
pipenv install
pipenv run python3 manage.py makemigrations
pipenv run python3 manage.py migrate
pipenv run python3 manage.py runserver 0.0.0.0:8000
