import { Request, Response } from "express";
import DeleteUserUseCase from "./DeleteUserUseCase";


class DeleteUserController {
    async handle(request:Request, response :Response){
        const {id} = request.body
        const deleteUserUseCase = new DeleteUserUseCase()

        const deletedUser = await deleteUserUseCase.execute(id)

        return response.json(deletedUser)
    }
}

export default DeleteUserController