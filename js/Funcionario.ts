import { Pessoa } from "./Pessoa.js";

export class Funcionario extends Pessoa{

    private dataAdmissao:number
    private dataDemissao:number
    private feedback: Array<string>
    private senha:string

    constructor(nome: string, cpf: string, rg: string, dataNascimento: string, sexo: string,
        nomeMae: string, nomePai: string, email: string, cep: string, endereco: string, numero: string,
        bairro: string, cidade: string, estado: string, telefone: string, saldo: number, contaCorrente: string, agencia: string,dataAdmissao:number,dataDemissao:number,feedback: Array<string>,senha:string){

        super(nome,cpf,rg,dataNascimento,sexo,nomeMae,nomePai,email,cep,endereco,numero,bairro,cidade,estado,telefone,saldo,contaCorrente,agencia)
        this.dataAdmissao = dataAdmissao
        this.dataDemissao = dataDemissao
        this.feedback = feedback
        this.senha = senha

        
    }

    
}