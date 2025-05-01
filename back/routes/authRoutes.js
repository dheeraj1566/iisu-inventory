import express from "express";
import {checkAuth, loginUser} from "../controllers/loginUsers.js";
const router = express.Router();

router.post("/login", loginUser);
router.get("/checkToken", checkAuth)
export default router;
