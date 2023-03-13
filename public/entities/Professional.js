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
exports.Professional = void 0;
const typeorm_1 = require("typeorm");
const Address_1 = require("./Address");
const BankAccount_1 = require("./BankAccount");
const Specialty_1 = require("./Specialty");
let Professional = class Professional {
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
], Professional.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Professional.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Professional.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Professional.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Professional.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'Número do conselho' }),
    __metadata("design:type", String)
], Professional.prototype, "boardNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Professional.prototype, "regionZoneCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'Descrição da região, Zona Norte, Zona Sul, Zona Oeste, Zona Leste ou Zona Central' }),
    __metadata("design:type", String)
], Professional.prototype, "regionZoneDescription", void 0);
__decorate([
    (0, typeorm_1.Column)((type) => Address_1.Address),
    __metadata("design:type", Address_1.Address)
], Professional.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)((type) => BankAccount_1.BankAccount),
    __metadata("design:type", Array)
], Professional.prototype, "bankAccount", void 0);
__decorate([
    (0, typeorm_1.Column)((type) => Specialty_1.Specialty),
    __metadata("design:type", Array)
], Professional.prototype, "specialty", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { default: true, nullable: false }),
    __metadata("design:type", Boolean)
], Professional.prototype, "isActive", void 0);
Professional = __decorate([
    (0, typeorm_1.Entity)('Professional'),
    __metadata("design:paramtypes", [Object, String, Boolean])
], Professional);
exports.Professional = Professional;
