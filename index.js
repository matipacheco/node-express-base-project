const path = require("path");

const express = require("express");
const app     = express();

app.use(express.static(path.join(__dirname, "/assets/")));
app.use(express.static(path.join(__dirname, "/assets/html/")));


app.get('/',function(request, response){
  response.sendFile('index.html');
});

app.listen(process.env.PORT || 3000);
console.log('App listening on port 3000!');