// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "Sudha@123",
//     DB:  "testdb",
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: "30000",
//         idle: "10000"
//     }
// }
const Sequelize = require('sequelize');
const db = new Sequelize("testdb", "root","Sudha@123",{
    host: "localhost",
    dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        acquire: "30000",
        idle: "10000"
    }
})
module.exports = db;