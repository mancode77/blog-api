'use strict'

test('test destroy article', function () {
    const create = jest.fn(function (req, res = {}) {
        let articles = {
            "id": 1,
            "title": "Javascript",
            "author": "Joan",
            "image": "asdKASJ8932.png",
            "content": "JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web menggunakan tag SCRIPT."
        };

        if (articles?.id === req?.path?.id) articles = {};

        res = { ...articles };

        return res;
    });

    const req = { path: { id: 1 } }

    expect(create(req)).toEqual({});
});