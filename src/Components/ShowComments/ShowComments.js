import CommentBox from '../CommentBox/CommentBox'
import commentsData from '../../Data/commentsData'
import { useState } from 'react'

import './ShowComments.css'

function ShowComments() {

  const [comments, setComments] = useState(commentsData)

  return (
    <div className='show-comments'>
      <h4 className="ShowComments__title">2 نظر ثبت شده</h4>
      {comments && comments.map(comment => (
        <div key={comment._id}>
          <CommentBox key={comment._id} {...comment} />
          {comment.answer && comment.answer.map(answer => (
            <CommentBox key={answer._id} styleCommnet='comment-answer' {...answer} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default ShowComments