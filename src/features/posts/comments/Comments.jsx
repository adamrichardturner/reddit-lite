import React from 'react';
import { useState, useEffect } from 'react';
import Styles from './Comments.css';
import { getPostComments } from '../../../util/Reddit';
import { timePassed } from '../post/Post';

export const Comments = ({permalink}) => {
    const [comments, setComments] = useState([]);
    // getPostComments and add to state
    useEffect(() => {
        getPostComments(permalink).then(jsonComments => setComments(...comments, jsonComments));
    }, [permalink]);

    return (
        <div className="commentsContainer" style={Styles}>
            <h2>Comments</h2>
            { // Iterate over comments and render comment elements
                Object.values(comments).map(comment => (
                    <>
                        <div className="commentsBody">
                            <p>{comment.body}</p>
                        </div>
                        <div className="commentsFooter">
                            <p>Author: {comment.author}</p>
                            <p>{timePassed(comment.created_utc)}</p>
                        </div>
                    </>
                ))
            }
        </div>
    )
};