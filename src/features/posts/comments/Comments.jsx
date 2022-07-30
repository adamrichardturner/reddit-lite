import React from 'react';
import { useState, useEffect } from 'react';
import Styles from './Comments.css';
import { getPostComments } from '../../../util/Reddit';
import { timePassed } from '../post/Post';

export const Comments = ({permalink}) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getPostComments(permalink).then(jsonComments => setComments(...comments, jsonComments));
    }, [permalink]);

    return (
        <div className="commentsContainer">
            <h2>Comments</h2>
            {
                Object.values(comments).map(comment => (
                    <>
                        <div>
                            <p>{comment.body}</p>
                        </div>
                        <div>
                            <p>Author: {comment.author}</p>
                            <p>{timePassed(comment.created_utc)}</p>
                        </div>
                    </>
                ))
            }
        </div>
    )
};

// export const Comments = (props) => {
//     const [comments, setComments] = useState([]);

//     useEffect(() => {
//         getPostComments(props.permalink)
//             .then(jsonComments => setComments(
//                 jsonComments.map(comment => (

//                     <div className={Styles.comment} key={comment.id}>
//                         <div className={Styles.commentHeader}>
//                             <p className={Styles.commentAuthor}>{comment.author}</p>
//                             <p className={Styles.commentDate}>{dateCalculator(comment.created_utc)}</p>
//                         </div>
//                         <p>{comment.body}</p>
//                     </div>

//                 ))));

//     }, [props.permalink]);

//     return (
//         <div id={props.id} className={props.visible === true ? styles.isShown : styles.isNotShown}>
//             {comments}
//         </div>
//     );
// };