import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import usermodel from "../models/usermodel.js";

export const registerStoreman = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;

    let storeman = await usermodel.findOne({ email });
    if (storeman) return res.status(400).json({ message: "User already exists" });
    console.log("password"+ password)
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashed"+hashedPassword);
    storeman = new usermodel({ fname, lname, email, password: hashedPassword });
    await storeman.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const storemanLogOut = (req, res) => {
  try {
    res.clearCookie("facultyToken");
    return res.json({ message: "Logout successful" }); 
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" }); 
  }
};

