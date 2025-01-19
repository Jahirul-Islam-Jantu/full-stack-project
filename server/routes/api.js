import express from "express";
import * as UserController from "../src/controllers/UsersController.js";
import * as ProductController from "../src/controllers/ProductController.js"
import * as FileUploads from "../src/controllers/FileUploadController.js"
import upload from "../src/middleware/FileUploads.js";
const router = express.Router()


// User API
router.post("/registerUser", UserController.userRegistration);
router.post("/login", UserController.userLogIn)
router.get("/logout", UserController.userLogOut)



// Product Api
router.post("/createProduct", ProductController.createProduct)
router.get("/getProducts", ProductController.getProduct)
// file route
router.post("/file-upload", upload.array("file", 20), FileUploads.fileUpload)


export default router