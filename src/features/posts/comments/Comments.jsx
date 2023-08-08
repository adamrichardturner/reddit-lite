import React from 'react'
import { useState, useEffect } from 'react'
import './Comments.css'
import { getPostComments } from '../../../util/Reddit'
import { timePassed } from '../post/Post'

export const Comments = ({ permalink }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchComments = async () => {
      const jsonComments = await getPostComments(permalink)
      setComments((prevState) => [...prevState, ...jsonComments])
    }

    fetchComments()
  }, [permalink])

  return (
    <div className='commentsContainer'>
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <React.Fragment key={index}>
          <div className='commentsBody'>
            <p>{comment.body}</p>
          </div>
          <div className='commentsFooter'>
            <p>Author: {comment.author}</p>
            <p>{timePassed(comment.created_utc)}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
