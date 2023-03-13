"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCnpjController = void 0;
class GetCnpjController {
    constructor(cnpjProvider) {
        this.cnpjProvider = cnpjProvider;
    }
    async handle(request, response) {
        try {
            const { cnpj } = request.params;
            const address = await this.cnpjProvider.getCNPJ(cnpj);
            return response.status(200).send(address);
        }
        catch (error) {
            return response.status(error.statusCode).json({
                message: error.message || 'Internal error'
            });
        }
    }
}
exports.GetCnpjController = GetCnpjController;
