import { Post } from './post/Post';
import Styles from './Posts.css';

export const Posts = () => {
    return (
            <section className="posts" style={Styles}>
                <Post />
            </section>
    );
};