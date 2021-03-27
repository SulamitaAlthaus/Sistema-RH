const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const jwt = require('jsonwebtoken')
const SECRET = 'sistemarh'
const User = require('./model/user')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


const TWO_HOURS = 1000 * 60 * 60 * 2

const {
    NODE_ENV = 'development',

    SESS_NAME = 'sid',
    SESS_SECRET = 'ssh!quiet,it\'asecret!',
    SESS_LIFETIME = TWO_HOURS,

} = process.env

const IN_PROD = NODE_ENV === 'production'

app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD
    }
}))

const redirectLogin = (req, res, next) => {
    if (!req.session.userId && !req.token) {
        res.redirect('/login')
    } else {
        next()
    }
}

const redirectHome = (req, res, next) => {
    if (req.session.userId) {
        res.redirect('/home')
    } else {
        next()
    }
}

function verifyJWT(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (bearerHeader) {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        console.log(bearerToken)
        next();
    } else {
        res.sendStatus(401);
        redirectLogin();
    }
}


app.get('/', (req, res) => {
    res.send("Servidor rodando")
})

const UserRoutes = require('./routes/UserRoutes');
app.use('/', UserRoutes);
app.use('/register', UserRoutes);
app.use('/users', UserRoutes);

app.get('/home', redirectLogin, (req, res) => {
})

app.get('/login', (req, res) => {
})

app.post('/login', redirectHome, async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email: email, password: password } })

        if (!user) {
            return res.status(400).json({ error: 'Verifique suas credenciais' })
        } else {
            const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: 300 })
            res.status(200).json({ token, user })

            if (user) {
                req.session.userId = user.id
            }
        }

    } catch (error) {
        return res.status(500).json(error);
    }
});


PORT = process.env.PORT || 8081
app.listen(PORT, () => {
    console.log("Servidor rodando")
})