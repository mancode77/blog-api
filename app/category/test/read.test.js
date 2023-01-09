'use strict'

test('test read article', function () {
    const read = jest.fn(function (req, res = {}) {
        res = [...req];

        return res;
    });

    const req = [
        {
            "id": 1,
            "name": "Komputer",
        },
        {
            "id": 2,
            "title": "Jaringan",
        }
    ];

    expect(read(req)).toEqual(req);
});