// Mengekspor fungsi untuk dipanggil oleh Router
exports.getBeranda = (req, res) => {
    res.render('pages/home', {
        userName: 'Administrator TI',
        fiturList: ['Routing Terisolasi', 'Controller Terpisah', 'Skalabilitas Monolith']
    });
};
exports.getKatalog = (req, res) => {
    res.render('pages/katalog', { pageTitle: 'Katalog Produk' });
};

exports.postTambahProduk = (req, res) => {

    console.log(req.body.namaProduk);

    // Post-Redirect-Get (PRG) Pattern: Cegah resubmit data saat F5
    res.redirect('/katalog');
};

