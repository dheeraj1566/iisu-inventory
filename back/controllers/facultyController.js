import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import facultymodel from "../models/facultyModel.js";
import usermodel from "../models/usermodel.js";

export const registerFaculty = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;

    let faculty = await usermodel.findOne({ email });
    if (faculty) return res.status(400).json({ message: "Faculty already exists" });
    console.log("password"+ password)
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashed"+hashedPassword);
    faculty = new facultymodel({ fname, lname, email, password: hashedPassword });
    await faculty.save();
    res.status(200).json({ message: "Faculty registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
  

// export const checkAuth = async (req, res) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.status(401).json({ message: "No token found, please log in" });
//   }

//   try {
//     jwt.verify(token, process.env.JWT_SECRET);
//     res.status(200).json({ message: "Faculty authenticated" }); 
//   } catch (error) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };

export const facultyLogOut = async (req, res) => {
  res.clearCookie('token');
  res.json({message:'Faculty logged out'})
  res.status(200).json({message:"Faculty log out successfully"})
};

