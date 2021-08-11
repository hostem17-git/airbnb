import Image from "next/image"
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
} from "@heroicons/react/solid"
function Header() {
    return (
        <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* logo*/}
            <div className="relative hidden md:flex items-center h-10 my-auto">
                <Image
                    src="https://links.papareact.com/qd3"
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>
            {/* Search */}


            <div className="flex items-center border-2 rounded-full shadow-sm py-2">
                <input className="flex-grow pl-5 outline-none bg-transparent text-sm text-gray-500 placeholder-gray-400" type="text" placeholder="Start your Search" />

                <SearchIcon className=" p-2 h-8 bg-red-400 rounded-full text-white mx-2 cursor-pointer hidden md:inline-flex" />
            </div>


            {/* Login */}
            <div className="hidden md:flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline-flex">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center border-2 rounded-full p-2 space-x-2">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
        </div>
    )
}

export default Header
