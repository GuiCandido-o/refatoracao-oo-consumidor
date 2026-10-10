export class Consumidor {
  private _nome: string;
  private _idade: number;
  private _email: string;

  constructor(nome: string, idade: number, email: string) {
    this._nome = Consumidor.validarNome(nome);
    this._idade = Consumidor.validarIdade(idade);
    this._email = Consumidor.validarEmail(email);
  }

  // --- Getters e setters (setters revalidam o valor) ---
  get nome(): string {
    return this._nome;
  }
  set nome(valor: string) {
    this._nome = Consumidor.validarNome(valor);
  }

  get idade(): number {
    return this._idade;
  }
  set idade(valor: number) {
    this._idade = Consumidor.validarIdade(valor);
  }

  get email(): string {
    return this._email;
  }
  set email(valor: string) {
    this._email = Consumidor.validarEmail(valor);
  }

  // --- Comportamento ---
  formatarExibicao(): string {
    return `Consumidor: ${this._nome} (${this._idade} anos) - ${this._email}`;
  }

  toString(): string {
    return this.formatarExibicao();
  }

  // --- Validações ---
  private static validarNome(nome: string): string {
    const limpo = (nome ?? "").trim();
    if (limpo.length < 2) {
      throw new Error("Nome inválido: informe ao menos 2 caracteres.");
    }
    return limpo;
  }

  private static validarIdade(idade: number): number {
    if (!Number.isInteger(idade) || idade < 0 || idade > 120) {
      throw new Error("Idade inválida: informe um número inteiro entre 0 e 120.");
    }
    return idade;
  }

  private static validarEmail(email: string): string {
    const limpo = (email ?? "").trim().toLowerCase();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(limpo)) {
      throw new Error(`E-mail inválido: "${email}".`);
    }
    return limpo;
  }
}
