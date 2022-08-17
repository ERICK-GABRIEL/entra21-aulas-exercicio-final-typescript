import { Pessoa } from "./Pessoa.js";

export class Empresa extends Pessoa {

    public razaoSocial: string
    public cnpj: string
    public inscricaoEstadual: string
    public dataDeAbertura: Date
    private senha: string

    constructor(nome: string, cpf: string, rg: string, dataNascimento: string, sexo: string,
        nomeMae: string, nomePai: string, email: string, cep: string, endereco: string, numero: string,
        bairro: string, cidade: string, estado: string, telefone: string, saldo: number, contaCorrente: string,
        agencia: string, razaoSocial: string, cnpj: string, inscricaoEstadual: string, dataDeAbertura: Date, senha: string) {

        super(nome, cpf, rg, dataNascimento, sexo, nomeMae, nomePai, email, cep, endereco, numero, bairro, cidade, estado, telefone, saldo, contaCorrente, agencia)
        this.razaoSocial = razaoSocial
        this.cnpj = cnpj
        this.inscricaoEstadual = inscricaoEstadual
        this.dataDeAbertura = dataDeAbertura
        this.senha = senha

    }
}