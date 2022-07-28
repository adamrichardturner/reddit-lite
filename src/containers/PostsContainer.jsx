import { useSelector, useDispatch } from 'react-redux';
import { Posts } from '../features/posts/Posts';
import { updateActiveTopic } from '../features/topics/topicsSlice';

export const PostsContainer = ({posts}) => {
    const activeSearchInput = useSelector(state => state.search);
   // const searchedPosts = posts.filter(post => post.title.toLowerCase().includes(activeSearchInput.toLowerCase()));

    return (
        <>
            <Posts 
                posts={posts}
            />
        </>
    )
}