import express from "express";
import { addInventory, getInventory, updateInventoryItem, issueInventory, getIssuedInventory, removeInventoryItem, purchaseInventory, restockInventory, facultyrequestInventory } from "../controllers/inventoryController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/inventory", authMiddleware("storeManToken", "adminToken", "facultyToken"), addInventory);
router.post("/purchase", authMiddleware("storeManToken", "adminToken","facultyToken"), purchaseInventory);
router.get("/getTable", authMiddleware("storeManToken", "adminToken", "facultyToken"), getInventory);
router.put("/update-inventory", authMiddleware("storeManToken", "adminToken","facultyToken"), updateInventoryItem);
router.post("/issue-inventory", authMiddleware("storeManToken", "adminToken","facultyToken"), issueInventory);
router.get("/getIssuedInventory", authMiddleware("storeManToken", "adminToken","facultyToken"), getIssuedInventory);
router.delete("/removeInventory", authMiddleware("storeManToken", "adminToken","facultyToken"), removeInventoryItem);
router.put("/restock-inventory", authMiddleware("storeManToken", "adminToken","facultyToken"), restockInventory);
router.post("/facultyrequestInventory", authMiddleware("faculty", "adminToken","facultyToken"), facultyrequestInventory);

export default router;

