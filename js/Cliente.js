"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_js_1 = require("./Pessoa.js");
class Cliente extends Pessoa_js_1.Pessoa {
    constructor(nome, cpf, rg, dataNascimento, sexo, nomeMae, nomePai, email, cep, endereco, numero, bairro, cidade, estado, telefone, saldo, contaCorrente, agencia, dataCadastro, dataAtualizacao, reclamacoes, senha) {
        super(nome, cpf, rg, dataNascimento, sexo, nomeMae, nomePai, email, cep, endereco, numero, bairro, cidade, estado, telefone, saldo, contaCorrente, agencia);
        this.dataCadastro = dataCadastro;
        this.dataAtualizacao = dataAtualizacao;
        this.reclamacoes = reclamacoes;
        this.senha = senha;
    }
    toString() {
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
        `;
    }
}
exports.Cliente = Cliente;
