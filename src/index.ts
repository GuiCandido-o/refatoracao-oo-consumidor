import { Consumidor } from "./Consumidor";
import { CadastroConsumidores } from "./CadastroConsumidores";

const cadastro = new CadastroConsumidores();

cadastro.adicionar(new Consumidor("Ana Silva", 30, "ana@email.com"));
cadastro.adicionar(new Consumidor("Carlos Souza", 22, "carlos@email.com"));
cadastro.adicionar(new Consumidor("Mariana Lima", 45, "mariana@email.com"));
cadastro.adicionar(new Consumidor("Roberto Alves", 19, "roberto@email.com"));
cadastro.adicionar(new Consumidor("Fernanda Dias", 33, "fernanda@email.com"));

console.log("=== LISTA DE CONSUMIDORES ===");
cadastro.listar().forEach(c => console.log(c.formatarExibicao()));

console.log("\n=== ANÁLISE ESTATÍSTICA ===");
console.log(`Média das Idades: ${cadastro.calcularMediaIdade().toFixed(1)} anos`);

const { maisVelho, maisNovo } = cadastro.obterExtremosIdade();
if (maisVelho && maisNovo) {
  console.log(`Mais Velho(a): ${maisVelho.nome} (${maisVelho.idade} anos)`);
  console.log(`Mais Novo(a): ${maisNovo.nome} (${maisNovo.idade} anos)`);
} else {
  console.log("Não foi possível calcular os extremos de idade");
}

console.log("\n=== TESTE DE VALIDAÇÕES ===");
const invalidos: Array<[string, number, string]> = [
  ["", 25, "x@email.com"],
  ["Pedro", -3, "pedro@email.com"],
  ["Lucas", 28, "email-invalido"],
];
for (const [nome, idade, email] of invalidos) {
  try {
    new Consumidor(nome, idade, email);
  } catch (e) {
    console.log("Erro esperado:", (e as Error).message);
  }
}
