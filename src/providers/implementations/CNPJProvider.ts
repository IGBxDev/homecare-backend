import { CNPJResponse, ICNPJProvider } from "../ICNPJProvider";
import axios from "axios";
import https from 'https'
import { CustomErro } from "../../useCases/Error/CustomError";

export class CNPJProvider implements ICNPJProvider{
    private url: string
    constructor(){
        this.url = `https://receitaws.com.br/v1/cnpj/{CNPJ}`
    }

    async getCNPJ(cnpj: string): Promise<CNPJResponse> {
        try {
            const url = this.url.replace('{CNPJ}', cnpj)

            const instance = axios.create({
                httpsAgent: new https.Agent({  
                    rejectUnauthorized: false
                })
            }) 

            const validacnpj = /^[0-9]{14}$/

            if(!validacnpj.test(cnpj)){
                throw new CustomErro('Formato de CNPJ inválido',404)
            }
            
            const response = await instance.get(url)
            const cnpjReponse: CNPJResponse = response.data
            
            if(response.data?.erro){
                throw new CustomErro('CNPJ não encontrado', 404)
            }
            
            if(response.status == 429){
                throw new CustomErro('Muitas requisições', 429)
            }

            if(response.status == 504){
                throw new CustomErro('Timeout', 504)
            }

            return cnpjReponse
        } catch (error) {
            throw new CustomErro(error.message, error.statusCode)
        }        
    }
}