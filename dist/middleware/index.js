"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
exports.logger = (req, res, next) => {
    console.info(`${req.method} ${req.path}`);
    next();
};
//# sourceMappingURL=index.js.map