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
exports.AppointmentSchedule = void 0;
const typeorm_1 = require("typeorm");
const StatusEnum_1 = require("./enum/StatusEnum");
const PatientSchedule_1 = require("./PatientSchedule");
const Professional_1 = require("./Professional");
let AppointmentSchedule = class AppointmentSchedule {
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
], AppointmentSchedule.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(type => Professional_1.Professional),
    __metadata("design:type", Professional_1.Professional)
], AppointmentSchedule.prototype, "professional", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], AppointmentSchedule.prototype, "registrationDate", void 0);
__decorate([
    (0, typeorm_1.Column)(type => PatientSchedule_1.PatientSchedule),
    __metadata("design:type", PatientSchedule_1.PatientSchedule)
], AppointmentSchedule.prototype, "patientScheduling", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], AppointmentSchedule.prototype, "startDateShift", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], AppointmentSchedule.prototype, "endDateShift", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AppointmentSchedule.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AppointmentSchedule.prototype, "statusCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AppointmentSchedule.prototype, "statusDescription", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AppointmentSchedule.prototype, "careRecord", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { default: true, nullable: false }),
    __metadata("design:type", Boolean)
], AppointmentSchedule.prototype, "isActive", void 0);
AppointmentSchedule = __decorate([
    (0, typeorm_1.Entity)('AppointmentSchedule'),
    __metadata("design:paramtypes", [Object, String, Boolean])
], AppointmentSchedule);
exports.AppointmentSchedule = AppointmentSchedule;
