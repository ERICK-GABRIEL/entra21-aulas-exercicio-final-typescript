export class Pessoa {

    public nome: string
    public cpf: string
    public rg: string
    public dataNascimento: string
    public sexo: string
    public nomeMae: string
    public nomePai: string
    public email: string
    public cep: string
    public endereco: string
    public numero: string
    public bairro: string
    public cidade: string
    public estado: string
    public telefone: string
    public saldo: number
    public contaCorrente: string
    public agencia: string

    constructor(nome: string, cpf: string, rg: string, dataNascimento: string, sexo: string,
        nomeMae: string, nomePai: string, email: string, cep: string, endereco: string, numero: string,
        bairro: string, cidade: string, estado: string, telefone: string, saldo: number, contaCorrente: string, agencia: string) {

        this.nome = nome
        this.cpf = cpf
        this.rg = rg
        this.dataNascimento = dataNascimento
        this.sexo = sexo
        this.nomeMae = nomeMae
        this.nomePai = nomePai
        this.email = email
        this.cep = cep
        this.endereco = endereco
        this.numero = numero
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
        this.telefone = telefone
        this.saldo = saldo
        this.contaCorrente = contaCorrente
        this.agencia = agencia

    }

}