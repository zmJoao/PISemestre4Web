

// requerer a biblioteca router do express
const route = require('express').Router()

// requerer o controller no UserController
const UserController = require('../controllers/userController')

//requerer as validações
const {registerValidationRule, validate} = require('../helpers/userValidator')


//Rotas
route.post('/register', validationResult(), validate, UserController.register),       
module.exports = route

// listar todos
route.get('/', UserController.listAll)


module.exports = route