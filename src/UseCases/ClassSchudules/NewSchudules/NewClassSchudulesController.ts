import { Request, Response } from "express";
import ClassShudulesUseCase from "./NewClassSchudulesUseCase";

class ClassschudulesController {
  async handle(req: Request, res: Response) {

    const {schudules , intervals } = req.body;

    const formatedSchudules = schudules.join("-")
    const formatedIntervals = intervals.join("-")

    const classSchudulesUseCase = new ClassShudulesUseCase();

    const create = await classSchudulesUseCase.execute(formatedSchudules, formatedIntervals);

    return res.json(create);
  }
}

export default ClassschudulesController;
