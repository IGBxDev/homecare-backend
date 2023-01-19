import { Router } from "express";
import { createUserController } from "./useCases/User/CreateUser";
import { deleteUserController } from "./useCases/User/DeleteUser";
import { getUserController } from './useCases/User/GetUser'
import { editUserController } from './useCases/User/EditUser'

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

export { router }