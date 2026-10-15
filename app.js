const express = require('express');
const app = express();
const PORT = 3000;
const pageRoutes = require('./routes/page.routes');

// Middleware: Mengizinkan akses publik ke berkas statis dalam folder 'public'
app.use(express.static('public'));

// Express otomatis akan mencari berkas UI di dalam folder /views
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Wajib untuk menangkap form berjenis application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Mengaktifkan routing untuk halaman
app.use('/', pageRoutes);

app.use((req, res) => { res.status(404).send('404 Not Found'); });
app.listen(3000, () => console.log('Server MVC Aktif!'));

// Definisi Endpoint / Rute Dasar (HTTP GET)
app.get('/', (req, res) => {
    res.send(`
        <link rel="stylesheet" href="/css/style.css">
        <div class="card">
            <h1>Middleware Statis Express</h1>
            <p>Jika font berubah dan kotak memiliki bayangan, CSS berhasil dimuat!</p>
        </div>
    `);
});

// Fallback Route / Penanganan 404
app.get('/', (req, res) => {

    // Menyimulasikan data yang diambil dari database Model
    const dataKonteks = {
        userName: 'Mahasiswa TI',
        fiturList: ['Arsitektur MVC', 'Template EJS', 'Modular Router']
    };

    // Render views/pages/home.ejs dengan melewatkan objek dataKonteks
    res.render('pages/home', dataKonteks);
});

// Mengaktifkan server untuk mendengarkan lalu lintas pada port 3000
app.listen(PORT, () => {
    console.log(`[SERVER] Aktif di http://localhost:${PORT}`);
});
