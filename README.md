# Refatoração para Orientação a Objetos — Cadastro de Consumidores

Exercício "Mão na Massa: Refatorando para Orientação a Objetos" (TechForge4 – ADS).

## O que mudou
- `type ConsumidorDTO` + funções soltas → `class Consumidor` com construtor, getters/setters e método `formatarExibicao()`.
- Validações (nome, idade, e-mail) dentro da classe, lançando erro em dados inválidos.
- Lista global + funções estatísticas → `class CadastroConsumidores` (adicionar, listar, média de idade, extremos de idade, e-mail único).

## Como executar
```bash
npm install
npm start
```
