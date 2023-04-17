import { ISidebarLink } from "../types";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import { RiPagesFill } from 'react-icons/ri'
import { MdExplore, MdOutlineLogout } from 'react-icons/md'
import { IoLanguageSharp } from 'react-icons/io5'

export const sidebarLinks: ISidebarLink[] = [
    {
        name: "feed",
        path: "#",
        icon: FaHome
    },
    {
        name: "profile",
        path: "#",
        icon: FaUserCircle
    },
    {
        name: "explore",
        path: "#",
        icon: MdExplore
    },
    {
        name: "language",
        path: "#",
        icon: IoLanguageSharp
    },
    {
        name: "logout",
        path: "#",
        icon: MdOutlineLogout
    },
    {
        name: "pages",
        path: "#",
        icon: RiPagesFill,
        hasSubmenu: true,
        submenu: [
            "contact", "faq", "404 error", "edit profile"
        ]
    },
    {
        name: "trending",
        path: "#",
        icon: BsFire
    }

]