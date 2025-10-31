const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
// app.use(cors());

// Create a MySQL connection pool

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "fedf118",
  port: "3306",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// default route
app.get("/", (req, res) => {
  res.send("Hello from Express server.....");
});

app.get("/get-products", (req, res) => {
  const sqlSelect = "select * from products";
  db.query(sqlSelect, (err, results) => {
    if (err) {
      console.log("Error in retrieving the products ", err);
      return;
    }
    res.send(results);
  });
});

// adding a new product
app.post("/add-product", (req, res) => {
  console.log(req.body);

  const { item, category, brand } = req.body;
  console.log("Received data:", item, category, brand);
  const sqlInsert =
    "INSERT INTO products(item, category, brand) VALUES (?,?,?)";
  db.query(sqlInsert, [item, category, brand], (err, results) => {
    if (err) {
      console.log("Error in insertion", err);
      return;
    }
    res.send("Insertion successful");
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
