import express from "express";
import {registerAdmin, adminLogOut} from "../controllers/adminController.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/logout", adminLogOut)


export default router;
