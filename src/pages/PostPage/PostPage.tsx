import React, { useContext, useState } from 'react'
import { CommonContext } from '../../context/CommonContext'
import { IPost } from '../../types'
import CommonComponent from '../../components/common/CommonComponent'

const PostPage: React.FC<{}> = () => {
  const { posts } = useContext(CommonContext)
  return (
    <CommonComponent>
      {
        posts?.map((post: IPost, index: number) => (
          <div>{post.body}</div>
        ))
      }
    </CommonComponent>
  )
}

export default PostPage