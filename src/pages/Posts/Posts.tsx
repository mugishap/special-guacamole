import React, { useContext } from 'react'
import CommonComponent from '../../components/common/CommonComponent'
import { CommonContext } from '../../context/CommonContext'
import { IPost } from '../../types'
import PostComponent from '../../components/PostComponent'
import { shuffle } from '../../utils/shuffle'

const Posts = () => {
  const { posts } = useContext(CommonContext)
  return (
    <CommonComponent>
      <div className='flex flex-col'>
        {
          shuffle(posts)?.map((post: IPost, index: number) => (
            <PostComponent post={post} key={index} />
          ))
        }
      </div>
    </CommonComponent>
  )
}

export default Posts