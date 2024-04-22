const express=require('express');
const app=express();
const Article=require('./models/article')
const mongoose=require('mongoose')
const artroute=require('./routes/articles')
const methodoverride= require('method-override')
const port=3000;

mongoose.connect('mongodb://localhost/3000')
  


app.use(express.urlencoded({extended:false}))

app.use(methodoverride('_method'))

app.get('/',async(req,res)=>
{
    
   const articles=await Article.find().sort({createdat:'desc'});
    res.render('articles/index.ejs',{articles:articles})
});

app.use('/articles',artroute);

app.listen(port,()=>
{
 console.log(`server running on ${port}.`);
});
