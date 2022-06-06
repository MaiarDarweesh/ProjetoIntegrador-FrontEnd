import { Produto } from "./Produto"; 

export class Usuario {
    public id: number;
    public nome: string;
    public usuario: string;
    public cpf: string;
    public nascimento: string;
    public senha: string;
    public voluntario: boolean;
    public produto: Produto[];
}