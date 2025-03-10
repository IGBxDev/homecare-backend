export interface ICEPProvider{
    getAddressByCep(cep: string): Promise<CEPResponse>
}

export type CEPResponse = {
    bairro: string
    cep: string
    complemento: string
    ddd: string
    gia: string
    ibge: string
    localidade: string
    logradouro: string
    siafi: string
    uf: string
}