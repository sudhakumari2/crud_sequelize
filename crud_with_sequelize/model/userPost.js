const db = require('../config/database');
const Sequelize=require('sequelize')
const UserPost=db.define("user_post",{
    UserId:{
        type:Sequelize.INTEGER
        },
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:Sequelize.INTEGER
      },
    title:{
        type:Sequelize.STRING},
    discription:{
        type:Sequelize.STRING},
    
})
module.exports = UserPost;