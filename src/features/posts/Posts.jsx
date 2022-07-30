import { Post } from './post/Post';
import Styles from './Posts.css';
import { useSelector } from 'react-redux';
import loadingGif from '../loadingProgress/loading.gif';

export const Posts = ({posts}) => {
    // Get search query from state
    const searchQuery = useSelector(state => state.search);
    // Get post loading status from state
    const loading = useSelector(state => state.posts.isLoading);
    // Store in queried posts our posts filtered where the title includes chars from searchQuery
    const queriedPosts = posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
    // Store in postList JSX for each post
    const postList = !loading && Object.values(queriedPosts).map(post => {

        return (<Post 
                key={post.id}
                title={post.title}
                author={post.author}
                content={post.selftext}
                likes={post.ups}
                media={post.url}
                time={post.created_utc}
                permalink={post.permalink}
                numComments={post.num_comments}
               />)
    });

    return (
            <section className="posts" style={Styles}>
                {loading ? <img src={loadingGif} alt="Loading app" height="100" id="loadingGif" /> : postList}
            </section>
    );
};