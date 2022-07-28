import TextField from '@mui/material/TextField';
import Styles from './Search.css';

export const Search = () => {
    return (
        <div className="searchBar" style={Styles}>
            <TextField id="outlined-basic" label="Search" variant="outlined" />
        </div>
    )
}