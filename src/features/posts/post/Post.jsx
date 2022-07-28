import { Likes } from '../likes/Likes';
import Styles from './Post.css';

export const Post = () => {
    return (
            <article className="post" style={Styles}>
                <div className="post-top">
                    <Likes />
                    <h2>Post title is quite long so I've written it here</h2>
                </div>
                <div className="post-middle">
                    <p>Content goes here tralallalaa Content goes here tralallalaa
                    Content goes here tralallalaa Content goes here tralallalaa
                    Content goes here tralallalaa Content goes here tralallalaa
                    </p>
                </div>
                <div className="post-bottom">
                    <p>Author</p>
                    <p>Post Time</p>
                    <p>11</p>
                </div>
            </article>
    );
};