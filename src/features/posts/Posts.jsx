import { Post } from './post/Post';
import Styles from './Posts.css';
import { useSelector } from 'react-redux';
import { LoadingProgress } from '../loadingProgress/LoadingProgress';

export const Posts = ({posts}) => {
    return (
        <Post />
    )
    // let loading = useSelector(state => state.post.isLoading);
    // let postList = !loading && posts.map(post => {
    //     return (
    //         <Post />
    //     )
    // });
    // return (
    //         <section className="posts" style={Styles}>
    //             {loading ? <LoadingProgress /> : postList}
    //         </section>
    // );
};