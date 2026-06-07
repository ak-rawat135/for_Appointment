const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql2/promise');
const cros=require('cors');
const bookapp=express()
bookapp.use(cros())
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'bookingapp',
    password:'20130008890'
});

bookapp.use(bodyParser.json())
bookapp.post('/book',async(req,res)=>{
    console.log(req.body)
    const {username,useremail,userphone}=req.body;
    try{
        
        console.log(await pool.execute('SELECT * FROM book'))
        await pool.execute('INSERT INTO book(name,email,phone) VALUES(?,?,?)',[username,useremail,userphone])
        res.status(200).json("done Mitrrrr ")
    }catch(err){
        console.log(err);
    }
})
bookapp.get('/bookings',async(req,res)=>{
    try{
        const [resutl]=await pool.execute('SELECT * FROM book')
        console.log(resutl,'hiiii mitrrr')
        res.json(resutl);
        
    }catch(err){
        console.log(err)

    }

})
bookapp.delete('/bookings/:id',async(req,res)=>{    
    const {id}=req.params;
    try{
        const [resutl]=await pool.execute('DELETE FROM book WHERE id=?',[id])
        res.status(200).json('Done mitrrrrr 😂🤣😅')

    }catch{
        res.status(500).json("not done ")
    }
})
bookapp.listen(8000,()=>{
    console.log("listend")
})