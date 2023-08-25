export class Contato{
    private _nome: string;
    private _telefone: number;
    private _email!: string;
    private _sexo!: string;


    constructor(nome: string, telefone: number){
        this._nome = nome;
        this._telefone = telefone;
    }

	public get nome(): string {
		return this._nome;
	}

	public get telefone(): number {
		return this._telefone;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set telefone(value: number) {
		this._telefone = value;
	}

    public get email(): string {
		return this._email;
	}

	public get sexo(): string {
		return this._sexo;
	}

	public set email(value: string) {
		this._email = value;
	}

	public set sexo(value: string) {
		this._sexo = value;
    }

}

export enum Genero{
    MASCULINO = "Masculino",
    FEMININO = "Feminino",
    NAODECLARADO = "Não Declarar",
}

