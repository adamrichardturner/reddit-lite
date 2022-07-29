import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Likes = ({likes}) => {
    return (
            <div className="likes">
                <div><KeyboardArrowUpIcon /></div>
                <p>{likes}</p>
                <div><KeyboardArrowDownIcon /></div>
            </div>
    );
};