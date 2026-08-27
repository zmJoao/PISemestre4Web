//requerer o express
const express = require('express')
//instancia do expres
const api = express()
//requerer o cors
const cors = require('cors')
//requerer a conexao com o banco
const conn = require('./db/conn')
//requerer os models
const user = require('./models/users')
//configurando o json response
api.use(express.json())
//requerer as rotas dos usuarios
const userRouter = require('./routes/userRoutes')

//salve cors
api.use(cors({credentials: true, origin:'http://localhost:3030'}))
api.use('/users', userRoutes)

//start api
conn.sync()
    .then(()=>{api.listen(3030)})
    .catch(error=>{console.info(error)}) 