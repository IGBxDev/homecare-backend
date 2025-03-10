import { Router } from "express";
import { createUserController } from "./useCases/User/CreateUser";
import { deleteUserController } from "./useCases/User/DeleteUser";
import { getUserController } from './useCases/User/GetUser'
import { editUserController } from './useCases/User/EditUser'
import { createProfessionalController } from './useCases/Professional/CreateProfessional'
import { deleteProfessionalController } from "./useCases/Professional/DeleteProfessional";
import { getCepController } from "./useCases/CEP";
import { getCnpjController } from "./useCases/CNPJ";
import { createPatientController } from "./useCases/Patient/CreatePatient";
import { deletePatientController } from "./useCases/Patient/DeletePatient";
import { getPatientController } from './useCases/Patient/GetPatient'

const router = Router()

router.post('/users', (request, response) =>{
    return createUserController.handle(request, response)
})

router.delete('/users/:id', (request, response) =>{
    return deleteUserController.handle(request, response)
})

router.get('/users', (request, response) =>{
    return getUserController.handle(request, response)
})

router.put('/users/:id', (request, response) =>{
    return editUserController.handle(request, response)
})

router.post('/professional', (request, response) =>{
    return createProfessionalController.handle(request, response)
})

router.delete('/professional/:id', (request, response) =>{
    return deleteProfessionalController.handle(request, response)
})

router.get('/cep/:cep', (request, response) =>{
    return getCepController.handle(request, response)
})

router.get('/cnpj/:cnpj', (request, response) =>{
    return getCnpjController.handle(request, response)
})

router.post('/patient', (request, response) =>{
    return createPatientController.handle(request, response)
})


router.post('/patient', (request, response) =>{
    return deletePatientController.handle(request, response)
})

router.get('/patient',(request, response)=>{
    return getPatientController.handle(request, response)
})


router.get('/', (request, response) =>{
    return response.status(200).json({ message: 'Home Care System: Backend', status: 'Online' })
})



export { router }