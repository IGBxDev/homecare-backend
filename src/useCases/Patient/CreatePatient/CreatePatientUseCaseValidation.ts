
import { GenderEnum } from '../../../entities/enum/GenderEnum';
import { ICreatePatientRequestDTO } from './CreatePatientDTO'
import * as validator from './CreatePatientError'

export const createPatientUseCaseValidation =(data: ICreatePatientRequestDTO) =>{
    
    if(!data.name) throw new validator.InvalidName

    if(!data.genderCode) throw new validator.InvalidGender()

    const genderCode = [0,1]
    if(!genderCode.includes(data.genderCode)) throw new validator.InvalidGenderCode()

    if(!data.cpf) throw new validator.InvalidCPF()

    if(!data.nationality) throw new validator.InvalidNationality()

    if(!data.address) throw new validator.InvalidAddress()

    if(!data.email) throw new validator.InvalidEmail()

    if(!data.cellPhone) throw new validator.InvalidCellPhone()

    data.genderDescription = getGenderDescription(data.genderCode)

}

const getGenderDescription = (genderCode: number) => {
    switch (genderCode) {
        case GenderEnum.Male:
            return 'Male';                       
        case GenderEnum.Female: 
            return 'Female'
    }
}