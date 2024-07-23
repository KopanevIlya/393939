import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json()); // Добавляем middleware для обработки JSON

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123Qwe45",
    database: "avion"
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed: ", err);
        throw err;
    }
    console.log("Connected to database");
});

app.get("/productitem/:id", (req, res) => {
    const itemId = req.params.id;
    const q = "SELECT * FROM avion.products WHERE id=?";
    db.query(q, [itemId], (err, data) => {
        if (err) {
            console.error("Failed to fetch product: ", err);
            return res.status(500).json(err);
        }
        return res.json(data);
    });
});

app.get("/", (req, res) => {
    const q = "SELECT * FROM avion.products";
    db.query(q, (err, data) => {
        if (err) {
            console.error("Failed to fetch products: ", err);
            return res.status(500).json(err);
        }
        return res.json(data);
    });
});


app.get("/basket/", (req, res) => {
    const q = "SELECT * FROM avion.basket";
    db.query(q, (err, data) => {
        if (err) {
            console.error("Failed to fetch products: ", err);
            return res.status(500).json(err);
        }
        return res.json(data);
    });
});

app.post("/post", (req, res) => {
    const q = "INSERT INTO avion.basket( `productImgAlt`, `productTitle`, `productPrice`, `productCategory`, `productType`, `productMaterial`) VALUES ( ?, ?, ?, ?, ?, ?)";
    const values = [
  
        req.body.productImgAlt,
        req.body.productTitle,
        req.body.productPrice,
        req.body.productCategory,
        req.body.productType,
        req.body.productMaterial
    ];

    console.log("Received data for insertion:", values); // Логируем полученные данные

    db.query(q, values, (err, data) => {
        if (err) {
            console.error("Failed to insert into basket: ", err); // Логируем ошибку
            return res.status(500).json({
                error: err.message,
                sqlMessage: err.sqlMessage,
                sql: err.sql
            });
        }
        return res.json(data);
    });
});


app.listen(8810, () => {
    console.log("Server is running on port 8810");
});
