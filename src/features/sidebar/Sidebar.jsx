import Styles from './Sidebar.css';

export const Sidebar = () => {
    return (
        <>
            <section className="sideBar" style={Styles}>
            <h2>Topics</h2>
                <ul>
                    <li>1. Reddit Topic goes here</li>
                    <li>2. Reddit Topic goes here</li>
                    <li>3. Reddit Topic goes here</li>
                    <li>4. Reddit Topic goes here</li>
                    <li>5. Reddit Topic goes here</li>
                    <li>6. Reddit Topic goes here</li>
                </ul>
            </section>
        </>
    );
};