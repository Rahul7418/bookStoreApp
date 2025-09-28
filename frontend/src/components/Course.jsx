import { Link } from "react-router-dom"
import list from "../../public/list.json"
import Cards from "../components/Cards"

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="text-center">
          <h1 className="pt-28 text-xl md:text-4xl"> We`re delighted to have you <span className="text-pink-500">Here! :)</span></h1>
          <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vel aliquid voluptatum fugit amet, ducimus deleniti earum dignissimos mollitia accusantium dolor ut modi odit quis optio, debitis quod hic ducimus deleniti earum dignissimos mollitia accusantium dolor ut modi odit.</p>
          <Link to = "/">
          <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {
            list.map((item) => (
              <Cards key = {item.id} item = {item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course