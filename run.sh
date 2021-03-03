#!/usr/bin/env 

REPORT_DATE=$(date +"%Y_%m_%dT%H_%M_%S")

## Define Environment varibles
PORT=3000
API_HOST=0.0.0.0

## Run node app/index.js
node app/index.js &>/dev/null &

## Get node app pid
api_pid=$!

k6 run -e API_PORT=$PORT -e API_HOST=$API_HOST --config config.json --out csv="reports/report_$REPORT_DATE.csv" tests/main.js

## Kill node app
echo "killing node api"
kill -KILL $api_pid
