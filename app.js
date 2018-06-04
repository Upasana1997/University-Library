var express = require('express'); //instance of express // require se import krte hain. 
const app = express(); //app has framework and framework provides methods

var bodyParser = require('body-parser');

var config=require('./config.json');
var mongoose=require('mongoose');
app.use(bodyParser.json());

mongoose.connect(config.connectionString);

app.use('',express.static('static'));     //apna project get krane ke liye jaise kuch na ho path me to ye static function chle
app.use('/home',express.static('static')); // use is a middleware function jo get post se pehle function krega or koi bhi javascript func chalane hon to isme daal skte hain.



/*app.get('/home',function(req,res)    //(same as above app.use('/home',----))
   {
      res.redirect('/');
   }
);*/

app.use('',function(req,res,next)
{
    middlewarefunction();
    next();
});

var middlewarefunction=function(){
    console.log("middle ware called");
 };

var booksRoute=require('./models/book');
app.use('/books',booksRoute);

/*app.get('/books',(req,res)=>        //path,(request,respond)
{
    res.send(books);     //respond send krenge
});   */              //path,handlerfunction diya hai

// app.<methodname>(PATH,HANDLER())  //SYNTAX OF TAKING METHOD

app.listen(8000,()=>
    {
        var date=new Date();

        console.log(`server is working on port:8000 at:${date.getHours()}:${date.getMinutes()}`);
    }
);  //kis server pe get hoga btayega


