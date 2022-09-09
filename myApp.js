let express = require("express");
let app = express();
let bodyParser = require("body-parser");

/* #1 Task: Serve a string
app.get("/", (req, res) => {
  res.send("Hello Express");
});
*/

// #2 Task: Serve an HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// #3 Task: Serve Static Assets
app.use("/public", /*Middleware*/ express.static(__dirname + "/public"));

// #4 Task: Serve JSON on a Specific Route
app.get("/json", (req, res) => {
  const mySecret = process.env["MESSAGE_STYLE"];
  let response = "Hello json";
  if (process.env.MESSAGE_STYLE == "uppercase") {
    response = response.toUpperCase();
  }
  res.json({ message: response });
});

// #5 Task: Build a simple logger. For every request, it should log to the console a string taking the following format: method path - ip
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// #6 Task: Chain Middleware to Create a Time Server
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({ time: req.time });
  }
);

// #7 Task: Build an echo server, mounted at the route GET /:word/echo. Respond with a JSON object, taking the structure {echo: word}
app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word,
  });
});

// #8 Task: Given the endpoint URL, /name?first=firstname&last=lastnameBuild an API endpoint, mounted at GET /name. Respond with a JSON document, taking the structure { name: 'firstname lastname'}.

app.get("/name", (req, res) => {
  //const firstName = req.query.first;
  //const lastName = req.query.last;
  const { first: firstName, last: lastName } = req.query;

  res.json({
    name: `${firstName} ${lastName}`,
  });
});

app.use(bodyParser.urlencoded({ extended: false }));
// #9 Task: Mount a POST handler at the path /name?first=firstname&last=lastname. If the `body-parser` is configured correctly, you should find the parameters in the object `req.body`
app.post("/name", (req, res) => {
  var string = `${req.body.first} ${req.body.last}`;

  res.json({ name: string });
});


































 module.exports = app;
