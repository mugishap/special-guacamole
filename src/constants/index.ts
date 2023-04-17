import { INavbarLink } from "../types";
import { FaHome } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import { RiPagesFill } from 'react-icons/ri'
import { MdExplore, MdOutlineLogout } from 'react-icons/md'
import { IoLanguageSharp } from 'react-icons/io5'

const navbarLink: INavbarLink[] = [
    {
        name: "Feed",
        path: "/feed",
        icon: FaHome
    },
    {
        name: "Profile",
        path: "/profile",
        icon: FaHome
    },
    {
        name: "Explore",
        path: "/explore",
        icon: MdExplore
    },
    {
        name: "Language",
        path: "#",
        icon: IoLanguageSharp
    },
    {
        name: "Logout",
        path: "#",
        icon: MdOutlineLogout
    },
    {
        name: "Pages",
        path: "#",
        icon: RiPagesFill,
        hasSubmenu: true,
        submenu: [
            "contact", "faq", "404 error", "edit profile"
        ]
    },
    {
        name: "Trending",
        path: "/trending",
        icon: BsFire
    }

]