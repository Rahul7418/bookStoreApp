import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4001/api/contact", data)
      console.log(res.data)
      toast.success("Message submitted successfully!")
      reset() // clear form after submit
    } catch (error) {
      console.error(error)
      toast.error("Failed to submit message")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-slate-900">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 relative">
        {/* Close button */}
        <Link to={'/'}>
          <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">✕</button>
        </Link>

        <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Contact
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              placeholder="Write your message here..."
              rows="3"
              className="w-full px-3 py-2 border rounded-md outline-none resize-none dark:bg-slate-900 dark:text-white"
              {...register("message")}
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center space-y-3 mt-4">
            <button
              type="submit"
              className="w-full bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
