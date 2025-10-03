import Contact from "../model/contact.model.js";

// Save contact form message
export const saveContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Message saved successfully", contact: newContact });
  } catch (error) {
    console.error("Contact Controller Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
