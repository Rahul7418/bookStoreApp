import toast from "react-hot-toast"
import { useAuth } from "../context/AuthProvider"

const Logout = () => {
    const [authUser, setauthUser] = useAuth()
    const handleLogout = () => {
        try {
            setauthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users")
            toast.success("Logout successfully")
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        } catch (error) {
            toast.error("Error: " + error)
        }
    }
    return (
        <div>
            <button className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 duration-300 cursor-pointer"
                onClick={handleLogout}
            >Logout</button>
        </div>
    )
}

export default Logout