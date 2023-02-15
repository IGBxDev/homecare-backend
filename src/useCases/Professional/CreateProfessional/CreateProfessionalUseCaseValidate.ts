import { RegionEnum } from "../../../entities/enum/RegionEnum";
import { CustomError } from "../../Error/CustomError";
import  * as validator  from "./CreateProfessionalError";
import { ICreateProfessionalRequestDTO } from "./ICreateProfessionalDTO";

export const createProfessionalUseCaseValidate = (data: ICreateProfessionalRequestDTO)=> {
    try{    
        data.regionZoneDescription = getZona(data.regionZoneCode)

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
        
        if(!data.regionZoneCode) throw new validator.InvalidRegion()

        const regionCode = [0,1,2,3,4]
        if(!regionCode.includes(data.regionZoneCode)) throw new validator.InvalidRegionCode()

    }catch(error){
        throw new CustomError(error.message, error.statusCode)
    }
}

const getZona = (regionZoneCode: number) =>{
    switch (regionZoneCode) {
        case RegionEnum.NORTH_ZONE:
            return 'NORTH_ZONE';                       
        case RegionEnum.SOUTH_ZONE: 
            return 'SOUTH_ZONE'
        case RegionEnum.EAST_ZONE: 
            return 'EAST_ZONE'
        case RegionEnum.WEST_ZONE: 
            return 'WEST_ZONE'
        case RegionEnum.CENTRAL_ZONE: 
            return 'CENTRAL_ZONE'
    }
}