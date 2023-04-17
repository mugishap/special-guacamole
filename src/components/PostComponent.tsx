import React, { useContext } from 'react'
import { AiOutlineRetweet } from 'react-icons/ai'
import { BiMessage } from 'react-icons/bi'
import { FaRegThumbsUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CommonContext } from '../context/CommonContext'
import { IComment, IPost, IUser } from '../types'

interface Props {
    post: IPost
}

const PostComponent: React.FC<Props> = ({ post }) => {
    const { users, comments } = useContext(CommonContext)
    const user: IUser = users.find((user: any) => user.id === post.userId)
    const postComments: IComment[] = comments.filter((comment: any) => comment.postId === post.id)
    return (
        <div className='my-3 p-6 bg-white rounded flex flex-col'>
            <Link to={`/post/${post.id}`}>
                <div className='flex items-center'>
                    <img src={`https://picsum.photos/${Math.ceil(Math.random() * 500)}`} className="object-cover w-12 h-12 rounded-full" alt="" />
                    <span className='ml-3'>{user.name} &nbsp; <span className='text-sm text-slate-500'>@{user.username}</span> </span>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold'>{post.title}</span>
                    <img src={`https://picsum.photos/700`} className='w-full object-cover rounded my-3' alt="" />
                    <span>{post.body}</span>
                </div>
            </Link>
            <div className='flex items-center justify-around my-4 w-full'>
                <div className='flex items-center'>
                    <FaRegThumbsUp />
                    <span className='ml-2 text-slate-500'>{Math.ceil(Math.random() * 500)}</span>
                </div>
                <div className='flex items-center'>
                    <BiMessage />
                    <span className='ml-2 text-slate-500'>{postComments.length}</span>
                </div>
                <div className='flex items-center'>
                    <AiOutlineRetweet />
                    <span className='ml-2 text-slate-500'>{Math.ceil(Math.random() * 500)}</span>
                </div>
            </div>
            <div className='flex items-center my-4 w-full'>
                <img src={`https://picsum.photos/${Math.ceil(Math.random() * 500)}`} className="object-cover w-10 h-10 rounded-full" alt="" />
                <input type="text" className='outline-none p-2  ml-3 rounded-xl w-11/12 border-slate-400 border-2' placeholder='Write your comment here' />
            </div>
            <div className='w-full flex justify-end items-end'>
                <div className='flex w-11/12 flex-col'>
                    {
                        comments.slice(0, 3).map((comment: IComment, index: number) => (
                            < div className='flex items-start my-2'>
                                <img src={`https://picsum.photos/700`} className='w-10 h-10 object-cover rounded-full mx-1' alt="" />
                                <div className='p-2 rounded-xl flex flex-col bg-slate-200 text-sm '>
                                    <span className='font-bold'>{comment.name}</span>
                                    <span className='mt-2'>{comment.body}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default PostComponent