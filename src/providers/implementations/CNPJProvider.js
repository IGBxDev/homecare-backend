"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CNPJProvider = void 0;
const axios_1 = __importDefault(require("axios"));
const https_1 = __importDefault(require("https"));
const CustomError_1 = require("../../useCases/Error/CustomError");
class CNPJProvider {
    constructor() {
        this.url = `https://receitaws.com.br/v1/cnpj/{CNPJ}`;
    }
    async getCNPJ(cnpj) {
        var _a;
        try {
            const url = this.url.replace('{CNPJ}', cnpj);
            const instance = axios_1.default.create({
                httpsAgent: new https_1.default.Agent({
                    rejectUnauthorized: false
                })
            });
            const validacnpj = /^[0-9]{14}$/;
            if (!validacnpj.test(cnpj)) {
                throw new CustomError_1.CustomErro('Formato de CNPJ inválido', 404);
            }
            const response = await instance.get(url);
            const cnpjReponse = response.data;
            if ((_a = response.data) === null || _a === void 0 ? void 0 : _a.erro) {
                throw new CustomError_1.CustomErro('CNPJ não encontrado', 404);
            }
            if (response.status == 429) {
                throw new CustomError_1.CustomErro('Muitas requisições', 429);
            }
            if (response.status == 504) {
                throw new CustomError_1.CustomErro('Timeout', 504);
            }
            return cnpjReponse;
        }
        catch (error) {
            throw new CustomError_1.CustomErro(error.message, error.statusCode);
        }
    }
}
exports.CNPJProvider = CNPJProvider;
