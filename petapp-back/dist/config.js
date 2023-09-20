"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = config_1.registerAs('config', () => {
    return {
        postgres: {
            dbName: process.env.POSTGRES_DB,
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT, 10),
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
        },
        jwtSecret: process.env.JWT_SECRET,
    };
});
//# sourceMappingURL=config.js.map