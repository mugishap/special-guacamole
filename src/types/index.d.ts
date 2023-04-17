import { IconType } from "react-icons";

export interface ISidebarLink {
    icon: IconType,
    name: "feed" | "profile" | "explore" | "language" | "logout" | "pages" | "trending",
    path: string,
    hasSubmenu?: boolean,
    submenu?: string[]
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    },
    profilePic?: string
}

export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
    image?: string,
    likes?: number,
}

export interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
    createdAt?: string
}