
const db = require('../config/database');
const Sequelize=require('sequelize')
const User=db.define("user",{
    userId:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:Sequelize.INTEGER
      },
    Name:{
        type:Sequelize.STRING},
    Email:{
        type:Sequelize.STRING},
    password:{
        type:Sequelize.STRING}
})

module.exports = User;