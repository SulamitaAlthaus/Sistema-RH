const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) =>{
    res.send("Servidor rodando")
})

const UserRoutes = require('./routes/UserRoutes');
app.use('/', UserRoutes);



PORT = process.env.PORT || 8081
app.listen(PORT, () => {
    console.log("Servidor rodando")
})