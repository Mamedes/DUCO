"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExpressAdapter {
    static create(fn) {
        return async function (req, res) {
            const obj = await fn(req.params, req.body);
            res.json(obj);
        };
    }
}
exports.default = ExpressAdapter;
