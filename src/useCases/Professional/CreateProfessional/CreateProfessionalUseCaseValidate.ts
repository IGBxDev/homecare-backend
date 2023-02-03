import { CustomError } from "ts-custom-error";
import { CustomErro } from "../../Error/CustomError";
import  * as validator  from "./CreateProfessionalError";
import { ICreateProfessionalRequestDTO } from "./ICreateProfessionalDTO";

export const createProfessionalUseCaseValidate = (data: ICreateProfessionalRequestDTO)=> {
    try{    
        if(!data.fullName || data.fullName === undefined) throw new validator.InvalidFullName()

        if(!data.email.includes('@') && data.email) throw new validator.InvalidEmail()

        if(!data.email) throw new validator.InvalidEmailNotFound()

        if(!data.cpf) throw new validator.InvalidCPF()

        if(!data.mobile) throw new validator.InvalidMobile()

        if(!data.specialty) throw new validator.InvalidSpecialty()

        if(!data.address.city) throw new validator.InvalidCity()

        if(!data.address.logradouro) throw new validator.InvalidLogradouro()

        if(!data.address.number) throw new validator.InvalidNumber()

        if(!data.address.postalCode) throw new validator.InvalidPostalCode()

        if(!data.address.uf) throw new validator.InvalidUF()        

    }catch(error){
        throw new CustomErro(error.message, error.statusCode)
    }
}