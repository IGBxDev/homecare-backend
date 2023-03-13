"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCnpjController = void 0;
const CNPJProvider_1 = require("../../providers/implementations/CNPJProvider");
const GetCnpjController_1 = require("./GetCnpjController");
const cnpjProvider = new CNPJProvider_1.CNPJProvider();
const getCnpjController = new GetCnpjController_1.GetCnpjController(cnpjProvider);
exports.getCnpjController = getCnpjController;
