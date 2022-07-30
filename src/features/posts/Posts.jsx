import { Post } from './post/Post';
import Styles from './Posts.css';
import { useSelector } from 'react-redux';
import loadingGif from '../loadingProgress/loading.gif';

export const Posts = ({posts}) => {
    let loading = useSelector(state => state.posts.isLoading);

    let postList = !loading && Object.values(posts).map(post => {

        return (<Post 
                key={post.id}
                title={post.title}
                author={post.author}
                content={post.selftext}
                likes={post.ups}
                media={post.url}
                time={post.created_utc}
                permalink={post.permalink}
               />)
    });

    return (
            <section className="posts" style={Styles}>
                {loading ? <img src={loadingGif} alt="Loading app" height="100" id="loadingGif" /> : postList}
            </section>
    );
};