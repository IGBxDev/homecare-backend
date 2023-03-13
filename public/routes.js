"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUser_1 = require("./useCases/User/CreateUser");
const DeleteUser_1 = require("./useCases/User/DeleteUser");
const GetUser_1 = require("./useCases/User/GetUser");
const EditUser_1 = require("./useCases/User/EditUser");
const CreateProfessional_1 = require("./useCases/Professional/CreateProfessional");
const DeleteProfessional_1 = require("./useCases/Professional/DeleteProfessional");
const CEP_1 = require("./useCases/CEP");
const CNPJ_1 = require("./useCases/CNPJ");
const CreatePatient_1 = require("./useCases/Patient/CreatePatient");
const DeletePatient_1 = require("./useCases/Patient/DeletePatient");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/users', (request, response) => {
    return CreateUser_1.createUserController.handle(request, response);
});
router.delete('/users/:id', (request, response) => {
    return DeleteUser_1.deleteUserController.handle(request, response);
});
router.get('/users', (request, response) => {
    return GetUser_1.getUserController.handle(request, response);
});
router.put('/users/:id', (request, response) => {
    return EditUser_1.editUserController.handle(request, response);
});
router.post('/professional', (request, response) => {
    return CreateProfessional_1.createProfessionalController.handle(request, response);
});
router.delete('/professional/:id', (request, response) => {
    return DeleteProfessional_1.deleteProfessionalController.handle(request, response);
});
router.get('/cep/:cep', (request, response) => {
    return CEP_1.getCepController.handle(request, response);
});
router.get('/cnpj/:cnpj', (request, response) => {
    return CNPJ_1.getCnpjController.handle(request, response);
});
router.post('/patient', (request, response) => {
    return CreatePatient_1.createPatientController.handle(request, response);
});
router.post('/patient', (request, response) => {
    return DeletePatient_1.deletePatientController.handle(request, response);
});
router.get('/', (request, response) => {
    return response.status(200).json({ message: 'Home Care System: Backend', status: 'Online' });
});
