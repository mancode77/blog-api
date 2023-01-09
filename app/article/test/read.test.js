'use strict'

test('test read article', function () {
    const read = jest.fn(function (req, res = {}) {
        res = [...req];

        return res;
    });

    const req = [
        {
            "id": 1,
            "title": "Javascript",
            "author": "Joan",
            "image": "asdKASJ8932.png",
            "content": "JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web menggunakan tag SCRIPT."

        },
        {

            "id": 2,
            "title": "Java",
            "author": "Lambert",
            "image": "jaksS83ASdk.png",
            "content": "Java adalah bahasa pemrograman yang dapat dijalankan di berbagai komputer termasuk telepon genggam. Bahasa ini awalnya dibuat oleh James Gosling saat masih bergabung di Sun Microsystems, yang saat ini merupakan bagian dari Oracle dan dirilis tahun 1995."
        }
    ];

    expect(read(req)).toEqual(req);
});