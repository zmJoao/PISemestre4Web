#!/bin/bash
set -e
sudo dnf install -y nodejs22 nodejs22-npm git mariadb105
sudo npm install -g pm2
[ -d api-pi ] || git clone
https://github.com/zmJoao/PISemestre4Web.git api-pi
cd api-pi && git pull
npm install
pm2 restart api || pm2 start server.js --name api
pm2 save