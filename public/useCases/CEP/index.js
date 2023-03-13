"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCepController = void 0;
const CEPProvider_1 = require("../../providers/implementations/CEPProvider");
const GetCepController_1 = require("./GetCepController");
const cepProvider = new CEPProvider_1.CEPProvider();
const getCepController = new GetCepController_1.GetCepController(cepProvider);
exports.getCepController = getCepController;
