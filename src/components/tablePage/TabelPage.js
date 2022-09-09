
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';


import useAuthUser from '../../services/AuthUser';



import './tableList.scss';

const TabelPage = ({list}) => {
    const location = useLocation();
     
    function renderTableItem({id, name, login, email, summary, project}, btn = null) {
        return (
            <>
                <div className="table__list-item-text id">
                    {id}
                </div>
                <div className="table__list-item-text name">
                    {name ? name : project.name}
                </div>
                <div className={login ? "table__list-item-text" : null}>
                    {login ? login : null}
                </div>
                <div className="table__list-item-text">
                    {email ? email : summary ? summary : "no data available"}
                </div>
                {btn ? btn : null}
            </>
        )
    }


    function renderTable(arr) {
        const list = arr.map((item) => {
            const btnTimesheets = location.pathname === '/tasks'
                    ?   <Link to={`/tasks/${item.id}`}
                            className="btn btn-primary small">
                            Timesheets
                        </Link>
                    : null;

            const table = renderTableItem(item, btnTimesheets);
            

            const element = location.pathname === '/users'   
                    ?    <Link to={`/users/${item.id}`} 
                            className="table__list-item">
                            {table}
                        </Link>
                    : <div className="table__list-item">{table}</div>;
            return (
                <li key={item.id}>
                    {element}
                </li>
            )
        })

        return (
            <ul className="app_list">
                {list}
            </ul>
        )
    }

    const element = useMemo(() => renderTable(list),
        // eslint-disable-next-line
        [list]);
    return (
        <>
            {element}
        </>
    )
}

export default TabelPage;