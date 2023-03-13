"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CEPProvider = void 0;
const axios_1 = __importDefault(require("axios"));
const https_1 = __importDefault(require("https"));
const CustomError_1 = require("../../useCases/Error/CustomError");
class CEPProvider {
    constructor() {
        this.url = `https://viacep.com.br/ws/CEP/json`;
    }
    async getAddressByCep(cep) {
        var _a;
        try {
            const url = this.url.replace('CEP', cep);
            const instance = axios_1.default.create({
                httpsAgent: new https_1.default.Agent({
                    rejectUnauthorized: false
                })
            });
            const validaCep = /^[0-9]{8}$/;
            if (!validaCep.test(cep)) {
                throw new CustomError_1.CustomError('Formato de CEP inválido', 404);
            }
            if (cep.length != 8) {
                throw new CustomError_1.CustomError('CEP deve conter 8 digitos numérico', 400);
            }
            const response = await instance.get(url);
            const address = response.data;
            if ((_a = response.data) === null || _a === void 0 ? void 0 : _a.erro) {
                throw new CustomError_1.CustomError('CEP não encontrado', 404);
            }
            return address;
        }
        catch (error) {
            throw new CustomError_1.CustomError(error.message, error.statusCode);
        }
    }
}
exports.CEPProvider = CEPProvider;
