console.log("APP.JS ÇALIŞTI");

const express = require('express');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 3000;

/* =========================
   VERİTABANI BAĞLANTISI
========================= */
const sequelize = new Sequelize('kamp_rehberi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const User = sequelize.define('User', {
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false }
});

sequelize.sync()
    .then(() => console.log('✅ Veritabanı ve Tablolar Hazır!'))
    .catch(err => console.log('❌ Veritabanı Bağlantı Hatası: ' + err));

/* =========================
   ORTA KATMANLAR
========================= */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

/* =========================
   SAYFA ROTALARI
========================= */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

/* =========================
   KAYIT OL
========================= */
app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ email, password: hashedPassword });
        res.redirect('/login');
    } catch (error) {
        res.send(`
        <h2 style="font-family:Segoe UI;color:red;text-align:center">
        Bu e-posta zaten kayıtlı!
        </h2>
        <p style="text-align:center"><a href="/register">Geri Dön</a></p>
        `);
    }
});

/* =========================
   GİRİŞ YAP
========================= */
app.post('/auth', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (user && await bcrypt.compare(password, user.password)) {
            // ✅ BAŞARILI GİRİŞ
            res.send(`
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>Giriş Başarılı</title>
<style>
body {
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),
  url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee');
  background-size: cover;
  font-family: 'Segoe UI', sans-serif;
}
.card {
  background: rgba(255,255,255,.95);
  padding: 45px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0,0,0,.35);
}
.card h1 { color:#1b4332 }
.card a {
  display:inline-block;
  margin-top:20px;
  padding:14px 26px;
  background:#1b4332;
  color:white;
  border-radius:10px;
  text-decoration:none;
}
.card a:hover { background:#2d6a4f }
</style>
</head>
<body>
<div class="card">
  <h1>✅ Giriş Başarılı</h1>
  <p>Hoş geldin, kamp yolculuğun başlıyor!</p>
  <a href="/index.html">Ana Sayfaya Git</a>
</div>
</body>
</html>
`);
        } else {
            // ❌ HATALI GİRİŞ
            res.send(`
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>Hatalı Giriş</title>
<style>
body {
  margin:0;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background:linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),
  url('https://images.unsplash.com/photo-1478131143081-80f7f84ca84d');
  background-size:cover;
  font-family:'Segoe UI',sans-serif;
}
.card {
  background:rgba(255,255,255,.95);
  padding:45px;
  border-radius:20px;
  text-align:center;
  box-shadow:0 20px 40px rgba(0,0,0,.35);
}
.card h1 { color:#9b2226 }
.card a {
  display:inline-block;
  margin-top:20px;
  padding:14px 26px;
  background:#9b2226;
  color:white;
  border-radius:10px;
  text-decoration:none;
}
</style>
</head>
<body>
<div class="card">
  <h1>❌ Hatalı Bilgiler</h1>
  <p>E-posta veya şifre yanlış</p>
  <a href="/login">Tekrar Dene</a>
</div>
</body>
</html>
`);
        }
    } catch (err) {
        res.status(500).send("Sunucu Hatası");
    }
});

/* =========================
   SUNUCU
========================= */
app.listen(PORT, () => {
    console.log(`🚀 Sunucu Hazır: http://localhost:${PORT}`);
});
