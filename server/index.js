require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
global.config = require('./config');
const NewsRouter = require('./news/routes.config');
const watcher = require('./watcher');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

app.use(bodyParser.json());
NewsRouter.routesConfig(app);

const server = app.listen(process.env.PORT, function () {
    console.log('App listening on port %s', process.env.PORT);
});

const io = require('socket.io')(server, { path: '/latestnews'});
global.io = io;