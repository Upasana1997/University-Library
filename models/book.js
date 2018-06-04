var express = require('express');
var router = express.Router();  // import kiya hai router ko
var mongoose=require('mongoose');

var bookSchema=mongoose.Schema({
    bookTitle: {
        type: String
    },
    bookAuthor :String,
    //entrydate: String
})

var Books= mongoose.model('bookModel',bookSchema,'books');

/*const books= 
  [
    {"title": "ABook", "author": "Author1", "entrydate": "2017-06-29"},
    {"title": "BBook", "author": "Author2", "entrydate": "2017-06-28"},
    {"title": "CBook", "author": "Author3", "entrydate": "2017-06-27"}u
  ];*/

  router.get('',(req, res)=>        //path,(request,respond)
  {
      console.log(`Get function: ${req.body}`);
       Books.find({},function(err,books)               //callback function with parameters as error and success
    {
          if(err)
          {
              throw err;
          }
          else{
            res.send(books);
          }
    })

      //res.send(books);     //respond send krenge
  }); 


   router.post('/addBook',(req, res)=>
{
    console.log(`The request object is: ${req.body}`);
    let book = req.body;
    Books.create(book,function(err,book)
{
    if(err)
    {
        console.log("got the error as: "+err);
        throw err;
    }
    else
    {
        // res.send(`Books added Successfully: ${book}`);    //res.json is same as res.send
        res.send(book);
    }
})
});


  module.exports = router;  // book.js ko public bnaya hai