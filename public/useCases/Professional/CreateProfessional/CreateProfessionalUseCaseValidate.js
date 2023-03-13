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
exports.createProfessionalUseCaseValidate = void 0;
const RegionEnum_1 = require("../../../entities/enum/RegionEnum");
const CustomError_1 = require("../../Error/CustomError");
const validator = __importStar(require("./CreateProfessionalError"));
const createProfessionalUseCaseValidate = (data) => {
    try {
        data.regionZoneDescription = getZona(data.regionZoneCode);
        if (!data.fullName || data.fullName === undefined)
            throw new validator.InvalidFullName();
        if (!data.email.includes('@') && data.email)
            throw new validator.InvalidEmail();
        if (!data.email)
            throw new validator.InvalidEmailNotFound();
        if (!data.cpf)
            throw new validator.InvalidCPF();
        if (!data.mobile)
            throw new validator.InvalidMobile();
        if (!data.specialty)
            throw new validator.InvalidSpecialty();
        if (!data.address.city)
            throw new validator.InvalidCity();
        if (!data.address.logradouro)
            throw new validator.InvalidLogradouro();
        if (!data.address.number)
            throw new validator.InvalidNumber();
        if (!data.address.postalCode)
            throw new validator.InvalidPostalCode();
        if (!data.address.uf)
            throw new validator.InvalidUF();
        if (!data.regionZoneCode)
            throw new validator.InvalidRegion();
        const regionCode = [0, 1, 2, 3, 4];
        if (!regionCode.includes(data.regionZoneCode))
            throw new validator.InvalidRegionCode();
    }
    catch (error) {
        throw new CustomError_1.CustomError(error.message, error.statusCode);
    }
};
exports.createProfessionalUseCaseValidate = createProfessionalUseCaseValidate;
const getZona = (regionZoneCode) => {
    switch (regionZoneCode) {
        case RegionEnum_1.RegionEnum.NORTH_ZONE:
            return 'NORTH_ZONE';
        case RegionEnum_1.RegionEnum.SOUTH_ZONE:
            return 'SOUTH_ZONE';
        case RegionEnum_1.RegionEnum.EAST_ZONE:
            return 'EAST_ZONE';
        case RegionEnum_1.RegionEnum.WEST_ZONE:
            return 'WEST_ZONE';
        case RegionEnum_1.RegionEnum.CENTRAL_ZONE:
            return 'CENTRAL_ZONE';
    }
};
