import { Column, Entity } from "typeorm";
import { GenderEnum } from "./enum/GenderEnum";


export class Gender{

    @Column()
    public gender: GenderEnum

    constructor(gender: GenderEnum){
        this.gender = gender
    }
}