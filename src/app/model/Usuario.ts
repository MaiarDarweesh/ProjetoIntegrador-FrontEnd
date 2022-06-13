import { Produto } from "./Produto";

export class Usuario {
    public id: number;
    public nome: string;
    public usuario: string;
    public senha: string;
    public voluntario: string;
    public produto: Produto[];
}