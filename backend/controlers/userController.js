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

    static async login(req, res) {
        const { email, senha } = req.body;

        try {
            // Verifica se o usuário existe
            const user = await User.findOne({ where: { email: email } });
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado!' });
            }

            // Compara a senha digitada com o hash salvo
            const checkPassword = await bcrypt.compare(senha, user.senha);
            if (!checkPassword) {
                return res.status(422).json({ message: 'Senha inválida!' });
            }

            res.status(200).json({
                message: 'Autenticado com sucesso!',
                user: {
                    id: user.idusuario,
                    usuario: user.usuario,
                    email: user.email,
                    clinica_cnpj: user.clinica_cnpj
                }
            });

        } catch (error) {
            res.status(500).json({ message: error.message || 'Erro no servidor' });
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