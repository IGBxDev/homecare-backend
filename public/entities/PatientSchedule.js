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
exports.PatientSchedule = void 0;
const typeorm_1 = require("typeorm");
const Patient_1 = require("./Patient");
const Schedule_1 = require("./Schedule");
let PatientSchedule = class PatientSchedule {
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
], PatientSchedule.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Patient_1.Patient)
], PatientSchedule.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.Column)(type => Schedule_1.Schedule),
    __metadata("design:type", Array)
], PatientSchedule.prototype, "schelude", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { default: true, nullable: false }),
    __metadata("design:type", Boolean)
], PatientSchedule.prototype, "isActive", void 0);
PatientSchedule = __decorate([
    (0, typeorm_1.Entity)('PatientScheduling'),
    __metadata("design:paramtypes", [Object, String, Boolean])
], PatientSchedule);
exports.PatientSchedule = PatientSchedule;
