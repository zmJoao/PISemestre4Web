//requerer as libs do validator

const {body, validationResult } = require('express-validator')

//regras de validações 

const registerValidationRules = () =>{
    return - [
    body('name').notEmpty().withMessage('O nome é obrigatório'),
    body('email').notEmpty().withMessage('O email é obrigatório, e deve ser válido'),
    body('password').notEmpty().withMessage('A senha é obrigatória'),
    body('phone').notEmpty().withMessage('O telefone é obrigatório e deve ser válido'),
    ]
}

//validação

const validate = (req, res, next) => {
    const erros = validationResult(req)
    if(erros.isEmpty){
        return next()
    }

    //retornar o primeiro
    return res.status(422).json({message: erros.array()[0].msg})
}

module.exports = {
    registerValidationRules,
    validate
}



