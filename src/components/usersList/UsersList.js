
import { useEffect, useMemo, useState } from 'react';


import useAuthUser from '../../services/AuthUser';
import TabelPage from '../tablePage/TabelPage';



// import './usersList.scss';

const UsersList = () => {
    const [usersList, setUsersList] = useState([]);
    const {getData, isUser} = useAuthUser();
    useEffect(() => {
        isUser();
        onRequest();
        // eslint-disable-next-line
    }, [])

    const onRequest = () => {
        getData('admin/users/?fields=id,login,name,email,type')
            .then(setUsersList);
    }

    const items = useMemo(() => <TabelPage list={usersList}/>,
        // eslint-disable-next-line
        [usersList]);
    return (
        <>
            {items}
        </>
        
    )
}

export default UsersList;