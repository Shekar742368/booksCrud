const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const globalRoutes = require("./src/routes");
const userRoutes = require("./src/routes/users");
const bookRoutes = require("./src/routes/books");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.all("/", globalRoutes);
app.all("/user", userRoutes);
app.all("/books", bookRoutes);

app.listen(8081, () => {
  console.log(`Server is running on port 8081`);
});

// http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.end("Hellow World");
// }).listen(8081);
