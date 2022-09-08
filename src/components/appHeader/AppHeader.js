import { Link, NavLink, useLocation } from 'react-router-dom';

import './appHeader.scss';

const AppHeader = () => {
    const location = useLocation();

    const activeStyle = {
        marginTop: '-5px',
        textAlign: "center",
        color: "#eeeeee",
        backgroundColor: "#505dcd",
        borderRadius: '12px',
        border: "0",
        boxSizing: 'border-box',
        textTransform: 'uppercase',
        padding: '13px',
        fontSize: '22px',
        lineHeight: '15px',
        height: '40px',
        width: '130px',
    }

    const disableStyles = {
        marginTop: '-5px',
        textAlign: "center",
        color: "#eeeeee",
        backgroundColor: "#595b72",
        borderRadius: '12px',
        border: "0",
        boxSizing: 'border-box',
        textTransform: 'uppercase',
        padding: '13px',
        fontSize: '22px',
        lineHeight: '15px',
        height: '40px',
        width: '130px',
    }

    const title = (
        <>
            <nav className="app__menu">
                <ul>
                    <li><NavLink 
                        style={({isActive}) => isActive ? activeStyle : disableStyles} 
                        to="/users">Users</NavLink></li>
                    /
                    <li><NavLink
                        style={({isActive}) => isActive ? activeStyle : disableStyles} 
                        to="/tasks">Tasks</NavLink></li>
                </ul>
            </nav>
            <div className="app__menu">
                <ul>
                    <li><Link className='btn btn-secondary small'
                        to="/users">User2-35</Link></li>

                    <li><Link className='btn btn-primary small'
                        to="/tasks">Logout</Link></li>
                </ul>
            </div>
        </>
    )

    return (
        <header className="app__header">
            <h1 className="app__title">
            <Link to="/">
                <span>Billing</span> panel
            </Link>
            </h1>
            {location.pathname !== '/login' ? title : null}
        </header>
            
        
    )
}

export default AppHeader;