import { Request, Response } from "express";
import { CreateScheduleUseCase } from "./CreateScheduleUseCase";
import { ICreateScheduleRequestDTO } from "./ICreateScheduleDTO";

export class CreateScheduleController{

    constructor(private createScheduleUseCase: CreateScheduleUseCase){}

    async handle(request: Request, response: Response):Promise<Response>{
        try {
            const schedule: ICreateScheduleRequestDTO = request.body
            this.createScheduleUseCase.execute(schedule)
            return response.status(200).send()
        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message || 'Internal error'})
        }
    }
}