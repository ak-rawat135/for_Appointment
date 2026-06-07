const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql2/promise');
const cros=require('cors');
const bookapp=express()
bookapp.use(cros())
// const pool=mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'bookingapp',
//     password:'20130008890'
// });

// bookapp.use(bodyParser.json())
// bookapp.post('/book',async(req,res)=>{
//     console.log(req.body)
//     const {username,useremail,userphone}=req.body;
//     try{
        
//         console.log(await pool.execute('SELECT * FROM book'))
//         await pool.execute('INSERT INTO book(name,email,phone) VALUES(?,?,?)',[username,useremail,userphone])
//         res.status(200).json("done Mitrrrr ")
//     }catch(err){
//         console.log(err);
//     }
// })
// bookapp.get('/bookings',async(req,res)=>{
//     try{
//         const [resutl]=await pool.execute('SELECT * FROM book')
//         console.log(resutl,'hiiii mitrrr')
//         res.json(resutl);
        
//     }catch(err){
//         console.log(err)

//     }

// })
// bookapp.delete('/bookings/:id',async(req,res)=>{    
//     const {id}=req.params;
//     try{
//         const [resutl]=await pool.execute('DELETE FROM book WHERE id=?',[id])
//         res.status(200).json('Done mitrrrrr 😂🤣😅')

//     }catch{
//         res.status(500).json("not done ")
//     }
// })
// bookapp.listen(8000,()=>{
//     console.log("listend")
// })

const path=require('path')
const sequelize=require('./database');
const book=require('./table');  
bookapp.use(express.static(path.join(__dirname, 'public')));

bookapp.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'book.html'));
    
})


bookapp.use(bodyParser.json())
bookapp.post('/book',async(req,res)=>{
    console.log(req.body)
    const {username,useremail,userphone}=req.body;
    try{
        const adding= await book.create({name:username, email:useremail, phone:userphone});
        res.status(200).json('done mitrrrrrrr')
        // console.log(await pool.execute('SELECT * FROM book'))
        // await pool.execute('INSERT INTO book(name,email,phone) VALUES(?,?,?)',[username,useremail,userphone])
        // res.status(200).json("done Mitrrrr ")
        

    }catch(err){
        console.log(err);
    }
})


bookapp.get('/bookings',async(req,res)=>{
    try{
        const result=await book.findAll()
        // const [resutl]=await pool.execute('SELECT * FROM book')
        // console.log(resutl,'hiiii mitrrr')
        res.json(resutl);
        
    }catch(err){
        console.log(err)

    }

})

bookapp.delete('/bookings/:id',async(req,res)=>{    
    const {id}=req.params;
    try{
        await book.delete({where:{id:id}})
        // const [resutl]=await pool.execute('DELETE FROM book WHERE id=?',[id])
        res.status(200).json('Done mitrrrrr 😂🤣😅')

    }catch{
        res.status(500).json("not done ")
    }
});


sequelize.sync().then(
    bookapp.listen(8000)
).catch(err=>console.log(err));

