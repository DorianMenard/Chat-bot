console.log('Hello World!');

const express = require('express')
const app = express()

app.get('/hello', function (req, res) {   
	res.send('Hello World!') 
})  

var port = process.env.PORT || 3000;

app.listen(port, function () {
   console.log('Example app listening on port 3000!') 
})
