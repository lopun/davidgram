#!/bin/bash

docker run -it -v "${pwd}/../:/home/davidgram" -p 16500:8000 lopun/davidgram:0.1