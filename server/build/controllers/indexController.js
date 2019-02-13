"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json([
            { text: 'API is in /api/users' },
            { text: 'API is in /api/casos' },
            { text: 'API is in /api/anc' }
        ]);
    }
}
exports.indexController = new IndexController();
