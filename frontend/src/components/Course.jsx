import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Cards from "../components/Cards"
import axios from "axios"

const Course = () => {
  const [book, setBook] = useState([])

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book")
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  }, [])

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="text-center">
          <h1 className="pt-28 text-xl md:text-4xl">
            We`re delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12 text-gray-600">
            Welcome to our online bookstore! Here you’ll find a wide collection
            of books and courses carefully designed to help you learn, grow, and
            achieve your goals. Whether you’re here to explore free resources or
            dive into premium content, we’ve got something for everyone.
            Discover, read, and start your journey of knowledge with us today!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Course
