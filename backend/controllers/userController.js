//requerer a model do user

const User = require('../models/users')

//requerer a biblioteca bcrypt
const bcrypt = require('bcrypt')


module.exports = class UserController{
    static async register(req, res){
        const {name, email, phone, password, image} = req.body
        
        //criptografar a senha
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        //Criar novo usuário
        try{
            await User.create({
                name: name,
                email: email,
                password: passwordHash,
                phone: phone
            })
            res.status(200).json({message: 'usuário cadastrado com sucesso'})
        } catch(error) {
            res.status(500).json({error: error})
        }
    }

    //metodo para listar todos os usuarios
    static async listall(req, res){
        try{
            const users = await User.findAll()
            res.status(200).json({users: users})
        } catch (error) {
            res.status(500).json({error:error})
        }
    }
    

}
