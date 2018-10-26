const { Router } = require('express');
const jsonwebtoken = require('jsonwebtoken');

const router = Router();
const secret = 'dummy';

async function checkAuth({ username, password }) {

    // validate user

    if (username === 'xxx' && password === 'xxx') {
        return true;
    }

    return false;

}


router.post('/login', async (req, res, next) => {

    const { username, password } = req.body;

    if (!await checkAuth({ username, password })) {
        res.status(401).send('Invalid username or password');
        return;
    }

    const accessToken = jsonwebtoken.sign({
        username
    }, secret);

    res.json({ token: { accessToken } });

});

router.get('/user', (req, res, next) => {
    res.json({ user: req.user });
});

router.post('/logout', (req, res, next) => {
    res.json({ status: 'OK' });
});

module.exports = router;
