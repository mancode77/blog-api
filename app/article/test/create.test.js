'use strict'

test('test create article', function () {
    const create = jest.fn(function (req, res = {}) {
        let image = { image: req.body.image };

        res = { ...req.body };

        return res;
    });

    const req = {
        body: {
            category: 'Komputer',
            title: 'Berita laptop terbaru!',
            author: 'Creator',
            image: 'komputer.png',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    };

    expect(create(req)).toEqual(req.body);
});