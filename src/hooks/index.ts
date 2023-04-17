import api from "../api"
import { toast } from "react-toastify"

export const useGetPosts = async ({ setPosts }: { setPosts: Function }) => {
    try {
        const request = await api.get('/posts')
        const response = request.data
        setPosts(response)

    } catch (error) {
        console.log(error);
        toast.error("Error getting posts")
    }
}

export const useGetUsers = async ({ setUsers }: { setUsers: Function }) => {
    try {
        const request = await api.get('/users')
        const response = request.data
        setUsers(response)
    } catch (error) {
        console.log(error);
        toast.error("Error getting users")
    }
}

export const useGetComments = async ({ setComments }: { setComments: Function }) => {
    try {
        const request = await api.get('/comments')
        const response = request.data
        setComments(response)
    } catch (error) {
        console.log(error);
        toast.error("Error getting users")
    }
}