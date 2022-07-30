import Logo from './reddit-logo.png';
import Styles from './Header.css';
import { Search } from '../search/Search';
import { TopicsDropdown  } from '../topicsDropdown/TopicsDropdown';
import { useDispatch } from 'react-redux';
import { updateActiveTopic } from '../topics/topicsSlice';
import { Link } from 'react-router-dom';

export const Header = () => {
    const dispatch = useDispatch();

    const onLogoClick = () => {
        dispatch(updateActiveTopic("/r/popular"))
    }

    return (
        <>
            <header style={Styles}>
            <Link to="/" style={{textDecoration: 'none'}}>
                    <div className="logo"
                         onClick={onLogoClick}
                         >
                            <img 
                                src={Logo} 
                                alt="Reddit Logo" 
                                height="50" 
                                id="logo"
                            />
                            <h1>Reddit<span style={{color: 'orangered'}}> Lite</span></h1>
                    </div>
                </Link>
                <div className="searchBar">
                    <Search />
                    <div className="topicsDropdown">
                        <TopicsDropdown />
                    </div>
                </div>  
            </header>
        </>
    );
};