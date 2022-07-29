import { Likes } from '../likes/Likes';
import Styles from './Post.css';

export const Post = ({title, content, author, time, likes, media}) => {
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
                    <p>Post Time</p>
                    <p>11</p>
                </div>
            </article>
    );
};