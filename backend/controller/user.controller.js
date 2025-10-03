import bcryptjs from "bcryptjs";
import User from "../model/user.model.js";

// signup
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exist." });
    }

    const hashPassword = await bcryptjs.hash(password, 10);

    const createdUser = new User({
      fullname,
      email,
      password: hashPassword,
    });

    await createdUser.save();

    return res.status(201).json({
      message: "User created successfully.",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error: " + error.message);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    return res.status(200).json({
      message: "Login successfully",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error: " + error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
