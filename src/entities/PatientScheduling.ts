import { Column } from "typeorm";
import { Patient } from "./Patient";

export class PatientScheduling{

    @Column()
    public patient: Patient

    @Column()
    public scheduling: Date
}