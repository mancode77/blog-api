'use strict'

test('test create article', function () {
    const create = jest.fn(function (req, res = {}) {
        res = { ...req.body };

        return res;
    });

    const req = {
        body: {
            "name": 'Komputer',
        }
    };

    expect(create(req)).toEqual(req.body);
});