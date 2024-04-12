
const NavBar = ()=>{

    return (
    <nav className="flex justify-around items-center  text-white h-24 sticky top-0 backdrop-blur-sm bg-[#1C1678]/70">
        <div>
            <h1 className="text-3xl font-bold cursor-pointer hover:text-[#42b883]">RKAI Blog Generator</h1>
        </div>
        <div>
            <a href ="#" className="text-white">Logout</a>
        </div>
    </nav>)
}

export default NavBar