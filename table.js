//importing this because of the data type mitrrrrr╰(*°▽°*)╯
const datatype=require('sequelize');


//importing the schema which we created to create a table 
const sequelize = require("./database");


const book=sequelize.define('book',{
    id:{
        type: datatype.INTEGER ,
        autoIncrement: true,
        primaryKey:true,
        allowNull:false
    },
    name:datatype.STRING,
    gmail:datatype.STRING,
    phone:datatype.INTEGER
})


module.exports=book;