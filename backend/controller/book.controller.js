import Book from "../model/book.model.js";  // ✅ include .js extension

// Get all books
export const getBook = async (req, res) => {
  try {
    const books = await Book.find();   // ✅ use lowercase variable
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Failed to fetch books", error });
  }
};
