import { response, Response } from "express";
import { CEPResponse, ICEPProvider } from "../ICEPProvider";
import axios from "axios";
import https from 'https'
import { CustomErro } from "../../useCases/Error/CustomError";

export class CEPProvider implements ICEPProvider{
    private url: string

    constructor(){
        this.url =  `https://viacep.com.br/ws/CEP/json`
    }

    async getAddressByCep(cep: string): Promise<CEPResponse> {
        try {
            const url = this.url.replace('CEP',cep)
            const instance = axios.create({
                httpsAgent: new https.Agent({  
                    rejectUnauthorized: false
                  })
            }) 

            const validaCep = /^[0-9]{8}$/

            if(!validaCep.test(cep)){
                throw new CustomErro('Formato de CEP inválido',404)
            }
            
            if(cep.length != 8){
                throw new CustomErro('CEP deve conter 8 digitos numérico',400)
            }

            const response = await instance.get(url)
            const address: CEPResponse = response.data 
            if(response.data?.erro){
                throw new CustomErro('CEP não encontrado', 404)
            }   
            return address
            
        } catch (error) {
            throw new CustomErro(error.message, error.statusCode)
        }        
    }    
}