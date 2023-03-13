"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessionalRepository = void 0;
const Professional_1 = require("../../entities/Professional");
class ProfessionalRepository {
    constructor(dataSourse) {
        this.dataSourse = dataSourse;
        this.initialize();
    }
    async deleteById(id) {
        await this.repository.update(id, { isActive: false });
    }
    async initialize() {
        const dbConnection = await this.dataSourse.connection();
        this.repository = dbConnection.getRepository(Professional_1.Professional);
    }
    findSpecialty(specialty) {
        throw new Error("Method not implemented.");
    }
    findByAddress() {
        throw new Error("Method not implemented.");
    }
    async save(professional) {
        this.repository.save(professional);
    }
    findAll() {
        return this.repository.find();
    }
}
exports.ProfessionalRepository = ProfessionalRepository;
