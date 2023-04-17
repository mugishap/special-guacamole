import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CommonContext } from './context/CommonContext'
const PostPage = React.lazy(() => import('./pages/PostPage/PostPage'))
const Posts = React.lazy(() => import('./pages/Posts/Posts'))

const Pages: React.FC<{}> = () => {

    const [users, setUsers] = React.useState<any>([])
    const [posts, setPosts] = React.useState<any>([])

    return (
        <CommonContext.Provider
            value={{
                posts,
                setPosts,
                users,
                setUsers
            }}
        >
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Posts />} />
                        <Route path="/post/:id" element={<PostPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </CommonContext.Provider>
    )
}

export default Pages