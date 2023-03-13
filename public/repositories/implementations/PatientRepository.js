"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientRepository = void 0;
const Patient_1 = require("../../entities/Patient");
const BaseRepository_1 = require("./BaseRepository");
class PatientRepository extends BaseRepository_1.BaseRepository {
    constructor(dataSourse) {
        super();
        this.dataSourse = dataSourse;
        this.initialize();
    }
    findByAddress(address) {
        throw new Error("Method not implemented.");
    }
    async all() {
        return this.repository.find();
    }
    async initialize() {
        const dbConnection = await this.dataSourse.connection();
        this.repository = dbConnection.getRepository(Patient_1.Patient);
    }
    async add(patient) {
        this.repository.save(patient);
    }
    async findById(id) {
        return this.repository.findBy({ id: id });
    }
    async delete(id) {
        await this.repository.update(id, { isActive: false });
    }
}
exports.PatientRepository = PatientRepository;
