import TextField from '@mui/material/TextField';
import Styles from './Search.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateActiveSearch } from './searchSlice';

export const Search = () => {
    const dispatch = useDispatch();
    // Store our searchQuery from state here
    const searchQuery = useSelector(state => state.search);

    // handleSearch queries on the TextField input
    const handleSearch = (event) => {
        dispatch(updateActiveSearch(event.target.value));
    }
    
    return (
        <div className="searchBar" style={Styles}>
            <TextField id="outlined-basic" 
                       label="Search" 
                       variant="outlined" 
                       onChange={handleSearch}
                       value={searchQuery}
                       />
        </div>
    )
}