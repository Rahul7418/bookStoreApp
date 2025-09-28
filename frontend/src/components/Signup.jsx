import { Link } from "react-router-dom"
import Login from "./Login"
import { useForm } from "react-hook-form"

const Signup = () => {
   const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="modal-box dark:bg-slate-900 dark:text-white">
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>

          {/* if there is a button in form, it will close the modal */}
          <Link to={'/'}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </Link>

          <h3 className="font-bold text-lg">Signup</h3>

          <div className="mt-4 space-y-4 flex flex-col">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          <div className="mt-4 space-y-4">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex fleex-col w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          <div className="mt-4 space-y-4">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="flex fleex-col w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
            <p>
              Have account?
              <button
                className="underline text-blue-500 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
            </p>
            <Login />
          </div>

        </form>
      </div>
    </div>
  )
}

export default Signup