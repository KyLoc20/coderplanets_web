#!/bin/bash

cd /root/web/

# make build.prod
pm2-runtime start --max-memory-restart 1G npm --name "coderplanets_web" -- run serve.prod &

while true
do
    sleep 100
done
