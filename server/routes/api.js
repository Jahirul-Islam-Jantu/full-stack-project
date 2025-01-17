import express from "express";
import * as UserController from "../src/controllers/UsersController.js";
const router = express.Router()


// User Registration
router.post("/registerUser", UserController.userRegistration);
router.post("/login", UserController.userLogIn)
router.get("/logout", UserController.userLogOut)



export default router