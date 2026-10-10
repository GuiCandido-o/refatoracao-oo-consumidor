import { Consumidor } from "./Consumidor";

export class CadastroConsumidores {
  private consumidores: Consumidor[] = [];

  adicionar(consumidor: Consumidor): void {
    const duplicado = this.consumidores.some(c => c.email === consumidor.email);
    if (duplicado) {
      throw new Error(`Já existe um consumidor com o e-mail ${consumidor.email}.`);
    }
    this.consumidores.push(consumidor);
  }

  listar(): readonly Consumidor[] {
    return this.consumidores;
  }

  calcularMediaIdade(): number {
    if (this.consumidores.length === 0) return 0;
    const soma = this.consumidores.reduce((acc, c) => acc + c.idade, 0);
    return soma / this.consumidores.length;
  }

  obterExtremosIdade(): { maisVelho?: Consumidor; maisNovo?: Consumidor } {
    if (this.consumidores.length === 0) return {};
    let maisVelho = this.consumidores[0];
    let maisNovo = this.consumidores[0];
    for (const c of this.consumidores) {
      if (c.idade > maisVelho.idade) maisVelho = c;
      if (c.idade < maisNovo.idade) maisNovo = c;
    }
    return { maisVelho, maisNovo };
  }
}
