import { Router } from "express";
import ClassschudulesController from "./UseCases/ClassSchudules/NewSchudules/NewClassSchudulesController";
import AllLabsController from "./UseCases/LabCases/AllLabs/AllLabsController";
import CreateLabController from "./UseCases/LabCases/CreateLab/CreateLabController";
import DeleteLabController from "./UseCases/LabCases/DeleteLab/DeleteLabController";
import UpdateLabController from "./UseCases/LabCases/UpdateLab/UpdateLabControler";
import AllReservesController from "./UseCases/ReservesCases/FindReserve/AllReserves/AllReservesController";
import NextWeekController from "./UseCases/ReservesCases/FindReserve/NextWeek/NextWeekController";
import NewReserveController from "./UseCases/ReservesCases/NewReserve/NewReserveController";
import AllUsersController from "./UseCases/UserCases/FindUser/AllUsers/AllUsersController";
import CreateUserConstroller from "./UseCases/UserCases/CreateUser/CreateUserController";
import DeleteUserController from "./UseCases/UserCases/DeleteUser/DeleteUserController";
import UpdateUserController from "./UseCases/UserCases/UpdateUser/UpdateUserController";
import FindUserController from "./UseCases/UserCases/FindUser/FindUserController";
import DeleteSchudulesUseCase from "./UseCases/ClassSchudules/DeleteSchudules/DeleteSchudulesUseCase";
import ClassShudulesUseCase from "./UseCases/ClassSchudules/NewSchudules/NewClassSchudulesUseCase";
import DeleteClassSchudulesController from "./UseCases/ClassSchudules/DeleteSchudules/DeleteSchudulesController";
import AllSchudulesController from "./UseCases/ClassSchudules/AllSchudules/AllSchudulesController";

const router = Router();

// lab Routes
const createLabController = new CreateLabController();
const allLabsController = new AllLabsController();
const deleteLabcontroller = new DeleteLabController();
const updateLabController = new UpdateLabController();

router.post("/createLab", createLabController.handle);
router.get("/allLabs", allLabsController.handle);
router.delete("/deleteLab", deleteLabcontroller.handle);
router.put("/updateLab", updateLabController.handle);

// user routes
const createUserController = new CreateUserConstroller();
const allUsersController = new AllUsersController();
const updateUserController = new UpdateUserController();
const deleteUserControler = new DeleteUserController();
const findUserController = new FindUserController


router.post("/createUser", createUserController.handle);
router.get("/allUsers", allUsersController.handle);
router.put("/updateUser", updateUserController.handle);
router.delete("/deleteUser", deleteUserControler.handle);
router.get("/finduserId/:id",findUserController.handleId)
router.get("/finduserRole/:role",findUserController.handleRole)


// reserve routes
const newReserveController = new NewReserveController();
const allReservesController = new AllReservesController();
const nextWeekControler = new NextWeekController();

router.post("/reserve", newReserveController.handle);
router.get("/allReserves", allReservesController.handle);
router.get("/nextWeek", nextWeekControler.handle);
export { router };

// class schudules

const classSchudulesController = new ClassschudulesController();
const deleteSchudulesController  = new DeleteClassSchudulesController();
const allschudulesController  = new AllSchudulesController
router.post("/classSchudueles", classSchudulesController.handle);
router.get("/allSchudules",allschudulesController.handle)
router.delete("/deleteClassSchudueles/:id", deleteSchudulesController.handle)

