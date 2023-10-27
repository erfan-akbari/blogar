import PostContentHeader from '../PostContentHeader/PostContentHeader'
import PostContentBody from '../PostContentBody/PostContentBody'
import PostContentFooter from '../PostContentFooter/PostContentFooter'
import { useEffect } from 'react';

function PostContent({ mainPost }) {
  return (
    <main className='PostContent'>
      <PostContentHeader mainPost={mainPost} />
      <PostContentBody />
      <PostContentFooter />
    </main>
  )
}

export default PostContent