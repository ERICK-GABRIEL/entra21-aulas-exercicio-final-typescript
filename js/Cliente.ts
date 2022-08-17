import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa{
    
    public dataCadastro: number
    public dataAtualizacao:number
    public reclamacoes: Array<string>
    private senha: string

    constructor(nome: string, cpf: string, rg: string, dataNascimento: string, sexo: string,
        nomeMae: string, nomePai: string, email: string, cep: string, endereco: string, numero: string,
        bairro: string, cidade: string, estado: string, telefone: string, saldo: number, contaCorrente: string, agencia: string,
        dataCadastro:number, dataAtualizacao:number,reclamacoes:Array<string>, senha:string){

            super(nome,cpf,rg,dataNascimento,sexo,nomeMae,nomePai,email,cep,endereco,numero,bairro,cidade,estado,telefone,saldo,contaCorrente,agencia)
            this.dataCadastro = dataCadastro
            this.dataAtualizacao = dataAtualizacao
            this.reclamacoes = reclamacoes
            this.senha = senha

            
    }

    public toString() : String {
        return `
                        Informações dos Clientes
        =====================================================
        - Nome: ${this.nome}
        - CPF: ${this.cpf}
        - RG: ${this.rg}
        - Data de Nascimento: ${this.dataNascimento}
        - Sexo: ${this.sexo}
        - Nome da Mãe: ${this.nomeMae}
        - Nome do Pai: ${this.nomePai}
        - Email: ${this.email}
        - CEP: ${this.cep}
        - Endereço: ${this.endereco}
        - Número: ${this.numero}
        - Bairro: ${this.bairro}
        - Cidade: ${this.cidade}
        - Estado: ${this.estado}
        - Telefone: ${this.telefone}
        - Saldo: ${this.saldo}
        - Conta Corrente: ${this.contaCorrente}
        - Agência: ${this.agencia}
        - Reclamações: ${this.reclamacoes}
        =====================================================
        `
    }
}