'use strict'

test('test update article', function () {
    const create = jest.fn(function (req, res = {}) {
        let category = {
            "id": 1,
            "title": "Komputer",
        };
        
        if (category?.id === req?.path?.id) category.title = 'Jaringan'; 

        res = { ...category };

        return res;
    });

    const req = { path: { id: 1 } }
    const res = {
        "id": 1,
        "title": "Jaringan",
    }

    expect(create(req)).toEqual(res);
});