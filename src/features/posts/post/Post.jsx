import { Likes } from '../likes/Likes';
import Styles from './Post.css';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Comments } from '../comments/Comments';
import { useState } from 'react';

export const timePassed = ms => {
    const todaysDate = Date.now();
    const datePost = new Date(ms * 1000);
    const diff = todaysDate - datePost;

    const months = diff / (1000 * 3600 * 24 * 30.4);
    const days = diff / (1000 * 3600 * 24);
    const hours = diff / (1000 * 3600);
    const minutes = diff / (1000 * 60);

    if (months > 12) {
        return "more than a year ago";
    } else if (months >= 1) {
        return Math.round(months) + " months ago";
    } else if (days >= 1) {
        return Math.round(days) + " days ago";
    } else if (hours >= 1) {
        return Math.round(hours) + " hours ago";
    } else if (minutes >= 1) {
        return Math.round(minutes) + " minutes ago";
    } else {
        return "less than a minute ago";
    }
};

export const Post = ({title, content, author, time, likes, media, permalink}) => {
    const [commentsVisible, setCommentsVisible] = useState(false);

    const handleClick = event => {
        setCommentsVisible(current => !current);
    }

    return (
            <article className="post" style={Styles}>
                <div className="post-top">
                    <Likes likes={likes}/>
                    <h2>{title}</h2>
                </div>
                <div className="post-middle">
                    <img src={media} alt=""/>
                    <p>{content}</p>
                </div>
                <div className="post-bottom">
                    <p>{author}</p>
                    <p>{timePassed(time)}</p>
                    <div className="comments">
                        <p>12</p>
                        <ChatBubbleOutlineIcon 
                            onClick={handleClick}
                        />
                    </div>
                </div>
                {commentsVisible && (<div class="comments">
                    <Comments permalink={permalink}/>
                </div>)}
            </article>
    );
};