const { json } = require('express');
const express = require('express')
const mongoose = require('mongoose')
const Product = require('./Models/productmodel')
const app = express();

// middleware

app.use(express.json())

// update using form - middleware

app.use(express.urlencoded({extended : false}))


// Routes


// get requests                                             
app.get('/', (req, res) =>{
      
    res.send("Hello node api")
})

app.get('/blog', (req, res)=> {
      res.send("Hello blog page")
})

app.get('/products', async(req, res) => {
        try {

            const prodcts = await Product.find({});
            res.status(200).json(prodcts) 

            
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: error.message})
        }
})

app.get('/products/:id', async(req, res) => { 
       try {
        
        const {id} = req.params;
        const prodct = await Product.findById(id);
        res.status(500).json(prodct)
            
       } catch (error) {
           console.log(error.message);
           res.status(500).json({message : error.message})
       } 
})


// Update Product

app.put('/products/:id', async(req, res) => {
        
    try {
         
          const {id} = req.params;
          const prodct =  await Product.findByIdAndUpdate(id, req.body);

          //we cannot find any product in database
          if(!prodct){
               res.status(404).json({message : `can't find product with id ${id}`})
          }

        const updatedprodct = await Product.findById(id)
        res.status(200).json(updatedprodct)



    } catch (error) {
        res.status(500).json({message : error.message})
    }
})


// Delete Product

app.delete('/products/:id', async(req, res) => {
          
          try {
             
             const {id} = req.params;
             const delprodct = await Product.findByIdAndDelete(id)

             if(!delprodct){
                   return res.status(404).json({message : `product does'nt exist with the ID ${id}`})
             }
             res.status(200).json(delprodct)
             
            
          } catch (error) {
            res.status(500).json({message : error.message})
          }
})

//  post requests

app.post('/products', async (req, res) => {
      
       try {
          
        const prodct = await Product.create(req.body);
        res.status(200).json(prodct)
        
       } catch (error) {
         console.log(error.message);
         res.status(500).json({message: error.message})
       }
})

mongoose.connect('mongodb+srv://admin:admin%4054321@nodeapitrial1.bpxavi3.mongodb.net/Node-API?retryWrites=true&w=majority')
.then( () =>{
    console.log("Database Connected");    
    app.listen('3000', function(){

        console.log("APi app running on port 3000");
  })
  
})
.catch((error) => {
      console.log(error);
})


