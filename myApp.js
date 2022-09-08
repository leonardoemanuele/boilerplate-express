let express = require('express');
let app = express();

console.log("Hello World");

/* #1 Task: Serve a string
app.get("/", (req, res) => {
  res.send("Hello Express");
});
*/

// #2 Task: Serve an HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
} );

// #3 Task: Serve Static Assets
app.use("/public",
/*Middleware*/       express.static(__dirname + "/public")                     );




































 module.exports = app;
