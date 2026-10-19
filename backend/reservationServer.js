const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "adın",
  password: "şifren",
  database: "database ismin" // kendi db adın buysa
});

app.post("/olympos-reserve", (req, res) => {
  const {
    camp_name,
    fullname,
    contact,
    people,
    checkin,
    checkout
  } = req.body;

  const sql = `
    INSERT INTO olympos_reservations
    (camp_name, fullname, contact, people, checkin, checkout)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [camp_name, fullname, contact, people, checkin, checkout],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("error");
      } else {
        res.send("ok");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Olympos rezervasyon serveri çalışıyor → http://localhost:3001");
});
