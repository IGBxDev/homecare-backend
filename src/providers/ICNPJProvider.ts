export interface ICNPJProvider{
    getCNPJ(cnpj: string): Promise<CNPJResponse>
}

export type CNPJResponse = {
    atividade_principal: AtividadePrincipal[] //Atividade Principal
    data_situacao: string //Data da Situação
    complemento: string //Complemento
    tipo: string //Tipo da Empresa
    nome: string //Razão Social
    telefone: string //Telefone
    email: string //Email
    atividades_secundarias: AtividadeSecundaria[] //Atividades Secundárias
    qsa: QSA[] //Quadro Societário
    situacao: string //Situação
    bairro: string // Bairro
    logradouro: string //Logradouro
    numero: string //Número
    cep: string // cep
    municipio: string //Município
    uf: string //Estado
    porte: string //Porte da Empresa
    abertura: string //Data de Abertura
    natureza_juridica: string //Natureza Jurídica
    cnpj: string //CNPJ da Empresa
    ultima_atualizacao: string //Data da última atualização dos dados com a Receita Federal
    status: string
    fantasia: string //Nome Fantasia
    efr: string // Ente Federativo Responsável
    motivo_situacao: string //Motivo da Situação
    situacao_especial: string //Situação Especial
    data_situacao_especial: string //Data da Situação Especial
    capital_social: string //Capital Social
    billing: Billing //Informações sobre o uso de limites da consulta
}

type AtividadePrincipal={
    code: string //Código da Atividade
    text: string //Descrição da Atividade
}

type AtividadeSecundaria={
    code: string //Código da Atividade
    text: string  //Descrição da Atividade
}

type QSA={
    nome: string //Nome do Sócio
    qual: string //Qualificação do Sócio
    pais_origem?: string //País de Origem do Sócio
    nome_rep_legal?: string //Nome do Representante Legal
    qual_rep_legal?: string //Qualificação do Representante Legal
}

type Extra = {}

type Billing={
    free: boolean //Indica se a consulta utilizou a API Gratuita
    database: boolean //Indica se a consulta foi resolvida com dados do cache
}