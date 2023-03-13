"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
const typeorm_1 = require("typeorm");
const Address_1 = require("./Address");
let Patient = class Patient {
    constructor(props, _id, isActive) {
        Object.assign(this, props);
        if (!_id) {
            this.isActive = true;
        }
    }
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", String)
], Patient.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Patient.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Patient.prototype, "susCard", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Patient.prototype, "genderCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Patient.prototype, "genderDescription", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Patient.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Patient.prototype, "nationality", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Patient.prototype, "Profession", void 0);
__decorate([
    (0, typeorm_1.Column)((type) => Address_1.Address),
    __metadata("design:type", Address_1.Address)
], Patient.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Patient.prototype, "cellPhone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Patient.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { default: true, nullable: false }),
    __metadata("design:type", Boolean)
], Patient.prototype, "isActive", void 0);
Patient = __decorate([
    (0, typeorm_1.Entity)('Patient'),
    __metadata("design:paramtypes", [Object, String, Boolean])
], Patient);
exports.Patient = Patient;
