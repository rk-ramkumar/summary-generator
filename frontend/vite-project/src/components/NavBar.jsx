import { IoIosLogOut } from "react-icons/io";
import { deleteCookie } from "../utils/cookies";
import { loginCN } from "../config/constants";

const NavBar = ()=>{

    return (
    <nav className="flex justify-around items-center  text-white h-24 sticky top-0 backdrop-blur-sm bg-[#1C1678]/70 z-50">
        <div>
            <h1 className="text-3xl font-bold cursor-pointer hover:text-[#42b883]">RKAI Blog Generator</h1>
        </div>
        <div>
            <button className="bg-transparent"><IoIosLogOut className="text-3xl text-[#42b883]" onClick={handleOnclick}/></button>
        </div>
    </nav>)
}

function handleOnclick(){
    if (confirm("Do you want to logout?")){
        deleteCookie(loginCN)
        window.location.href = "/login"
    }
}
export default NavBar