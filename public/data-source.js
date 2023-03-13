"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mongodb",
    url: "mongodb+srv://homecaresystem:123asyst100@homecaresystem.dh0cd.mongodb.net/homecare-dev",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    synchronize: true,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
    port: 27017
});
