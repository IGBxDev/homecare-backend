import { Column, Entity } from "typeorm";
import { GeneroEnum } from "./enum/GeneroEnum";


export class Genero{

    @Column()
    public genero: GeneroEnum

    constructor(genero: GeneroEnum){
        this.genero = genero
    }
}