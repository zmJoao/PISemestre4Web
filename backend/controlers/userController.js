//requerer o model do usuario
const User = require('../models/Users')

//requerer biblioteca bcrypt
const bcrypt = require('bcrypt')

module.exports = class UserController{
    static async register(req, res){
        const {usuario, email, senha, clinica_cnpj} = req.body

        //criptografar senha
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(senha, salt)

        //criar novo usuario
        try{
            await User.create({
                usuario: usuario,
                email: email,
                senha: passwordHash,
                clinica_cnpj: clinica_cnpj
            })
            res.status(200).json({message:'Usuario Cadastrado com sucesso'})
        }catch(error){
            res.status(500).json({message: error})
        }
    }

    //metodo para listar todos os usuarios
    static async listAll(req, res){
        try{
            const users = await User.findAll()
            res.status(200).json({users:users})
        }
        catch(error){
            res.status(500).json({error: error})
        }
    }
}