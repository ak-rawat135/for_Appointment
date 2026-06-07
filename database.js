const Sequelize =require('sequelize');


const sequelize=new Sequelize('bookingappbyseqelize', 'root', '20130008890',{
    dialect:'mysql',
    host:'localhost'
})


module.exports=sequelize;