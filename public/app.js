"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.express.use(express_1.default.json());
        this.express.use((0, cors_1.default)());
    }
    routes() {
        this.express.use(routes_1.router);
    }
}
exports.default = new App().express;
