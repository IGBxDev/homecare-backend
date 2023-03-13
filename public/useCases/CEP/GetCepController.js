"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCepController = void 0;
class GetCepController {
    constructor(cepProvider) {
        this.cepProvider = cepProvider;
    }
    async handle(request, response) {
        try {
            const { cep } = request.params;
            const address = await this.cepProvider.getAddressByCep(cep);
            return response.status(200).send(address);
        }
        catch (error) {
            return response.status(error.statusCode).json({
                message: error.message || 'Internal error'
            });
        }
    }
}
exports.GetCepController = GetCepController;
