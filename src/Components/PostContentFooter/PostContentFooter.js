import PostComments from '../PostComments/PostComments'
import ProfileCreator from '../ProfileCreator/ProfileCreator'

import './PostContentFooter.css'

function PostContentFooter() {
  return (
    <div>
      <ProfileCreator />
      <PostComments />
    </div>
  )
}

export default PostContentFooter