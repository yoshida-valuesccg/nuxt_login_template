const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('express-jwt');

const app = express();
const secret = 'dummy';

app.use(cookieParser());
app.use(bodyParser.json());

app.use(
    jwt({ secret })
        .unless({ path: '/api/auth/login' })
);

app.use('/auth', require('./routes/auth'));

// other routes

app.use((err, req, res, next) => {
    console.error(err);
    res.status(401).send(err + '');
});

module.exports = {
    path: '/api',
    handler: app
};
