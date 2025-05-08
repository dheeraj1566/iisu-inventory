import express from "express";
import {facultyLogOut, requestForInventroy} from "../controllers/facultyController.js";


const router = express.Router();

// router.post("/facultysignUp", registerFaculty);
router.post("/faculty-logout",facultyLogOut);
router.post("/send-request", requestForInventroy);


export default router;