"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mariadb_1 = require("mariadb");
const dotenv_1 = require("dotenv");
dotenv_1.config();
const pool = mariadb_1.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: Number(process.env.DB_CONNECTION_LIMIT),
});
pool.on("connection", function (connection) {
    console.log("DB:: Connected");
});
pool.on("acquire", function (connection) {
    console.log(`DB:: Connection ${connection.threadId} acquired`);
});
pool.on("enqueue", function () {
    console.log("DB:: Waiting for available connection");
});
pool.on("release", function (connection) {
    console.log(`DB:: Connection ${connection.threadId} released`);
});
exports.default = pool;
//# sourceMappingURL=db.js.map