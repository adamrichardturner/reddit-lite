import { Post } from './post/Post';
import Styles from './Posts.css';
import { useSelector } from 'react-redux';
import { LoadingProgress } from '../loadingProgress/LoadingProgress';

export const Posts = ({posts}) => {
    let loading = useSelector(state => state.post.isLoading);
    let postList = !loading && Object.values(posts).map(post => {
        return (<Post 
                key={post.id}
                title={post.title}
                author={post.author}
                content={post.selftext}
                likes={post.ups}
                media={post.url}
               />)
    })
    return (
            <section className="posts" style={Styles}>
                {loading ? <p>Loading</p> : postList}
            </section>
    );
};