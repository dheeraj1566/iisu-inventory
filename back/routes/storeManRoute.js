import express from "express";
import {registerStoreman, storemanLogOut} from "../controllers/storManController.js"
const router = express.Router();

router.post("/register-storeman", registerStoreman);
router.post("/logout-storeman",storemanLogOut)



export default router;
