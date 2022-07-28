import Logo from './reddit-logo.png';
import Styles from './Header.css';
import { Search } from '../search/Search';
import { TopicsDropdown  } from '../topicsDropdown/TopicsDropdown';

export const Header = () => {
    return (
        <>
            <header style={Styles}>
                <img 
                    src={Logo} 
                    alt="Reddit Logo" 
                    height="50" 
                    id="logo"
                />
                <h1>Reddit Lite</h1>
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