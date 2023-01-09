'use strict'

test('test destroy article', function () {
    const create = jest.fn(function (req, res = {}) {
        let category = {
            "id": 1,
            "name": "Komputer"
        };

        if (category?.id === req?.path?.id) category = {};

        res = { ...category };

        return res;
    });

    const req = { path: { id: 1 } };

    expect(create(req)).toEqual({});
});