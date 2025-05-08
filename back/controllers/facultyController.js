

// export const registerFaculty = async (req, res) => {
//   try {
//     const { fname, lname, email, password } = req.body;

//     let faculty = await usermodel.findOne({ email });
//     if (faculty) return res.status(400).json({ message: "Faculty already exists" });
//     console.log("password"+ password)
//     const hashedPassword = await bcrypt.hash(password, 10);
//     console.log("hashed"+hashedPassword);
//     faculty = new usermodel({ fname, lname, email, password: hashedPassword });
//     await faculty.save();
//     res.status(200).json({ message: "Faculty registered successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };
  
export const facultyLogOut = (req, res) => {
  try {
    res.clearCookie('facultyToken');
    res.json({ success: true, message: "Logged out" }); 

    res.status(200).json({ message: "This will crash" }); 
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


export const requestForInventroy = async (req, res)=> {

}