import { Column } from "typeorm";
import { RegionEnum } from "./enum/RegionEnum";


export class Region{

    @Column()
    public region: RegionEnum
}