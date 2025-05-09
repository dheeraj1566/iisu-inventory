import express from "express";
import {requestForInventroy} from "../controllers/facultyController.js";


const router = express.Router();

router.post("/send-request", requestForInventroy);


export default router;