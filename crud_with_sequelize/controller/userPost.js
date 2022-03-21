const UserPost = require('../model/userPost');
const Joi = require('joi');
const User = require('../model/user');
const Post = async(req, res)=>{
    const Schema = Joi.object({
        userId: Joi.number()
        .required(),
        title: Joi.string()
            .min(5)
            .max(50)
            .required(),
        discription: Joi.string()
            .min(5)
            .max(25)
            .required()
    });
    let payload 
    const validSchema = Schema.validate(req.body)
    if (validSchema.error) {
        console.log(validSchema.error);
        return res.status(400).json({
            massage: validSchema.error.massage || "Bad Request",
            code: 400
        })
    } 
    else{
        payload = validSchema.value
    }
    try{
        payload = {
            userId: payload.userId,
            title: payload.title,
            discription: payload.discription
        }
        const exits = await UserPost.findOne({ where: { title: payload.title } })
        console.log(exits);
        if (exits) {
            return res.status(200).send({
                massage: "user post already exits",
                status: 422,
                data: exits

            })
        }
        else {
            const result = await UserPost.create(payload)
            return res.status(201).send({
                massage: "user post added successfully",
                status: 201,
                data: result
            })

        }
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            massage: 'internal server Error',
            status: 500,
            data: err
    
        })
       
    }
    
}
// get data by id
const getbyId = async(req, res)=>{
    try {
        User.hasMany(UserPost,{foreignKey:'userId'})
        User.belongsTo(User,{foreignKey:"userId"})
        const exist =await User.findAll({where:{userId:req.params.id},include:UserPost})
        if (exist) {
            // console.log(exits);
            return res.status(200).send({
                status: 200,
                data: exist
            })
        }else{
            return res.status(400).json({
                massage: 'Data  not found ' || "Bad Request",
                status: 400
            })
        }
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({
            massage: 'internal server Error',
            status: 500
        })
    }
}




module.exports = {Post, getbyId}