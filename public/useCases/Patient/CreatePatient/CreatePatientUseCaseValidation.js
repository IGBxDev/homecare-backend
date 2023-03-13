"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPatientUseCaseValidation = void 0;
const GenderEnum_1 = require("../../../entities/enum/GenderEnum");
const validator = __importStar(require("./CreatePatientError"));
const createPatientUseCaseValidation = (data) => {
    if (!data.name)
        throw new validator.InvalidName;
    if (!data.genderCode)
        throw new validator.InvalidGender();
    const genderCode = [0, 1];
    if (!genderCode.includes(data.genderCode))
        throw new validator.InvalidGenderCode();
    if (!data.cpf)
        throw new validator.InvalidCPF();
    if (!data.nationality)
        throw new validator.InvalidNationality();
    if (!data.address)
        throw new validator.InvalidAddress();
    if (!data.email)
        throw new validator.InvalidEmail();
    if (!data.cellPhone)
        throw new validator.InvalidCellPhone();
    data.genderDescription = getGenderDescription(data.genderCode);
};
exports.createPatientUseCaseValidation = createPatientUseCaseValidation;
const getGenderDescription = (genderCode) => {
    switch (genderCode) {
        case GenderEnum_1.GenderEnum.Male:
            return 'Male';
        case GenderEnum_1.GenderEnum.Female:
            return 'Female';
    }
};
