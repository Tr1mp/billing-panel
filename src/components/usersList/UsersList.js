
import { useEffect, useMemo, useState } from 'react';


import useAuthUser from '../../services/AuthUser';
import SetContent from "../../util/SetContent";
import TabelPage from '../tablePage/TabelPage';

const UsersList = () => {
    const [usersList, setUsersList] = useState([]);
    const {getData, isUser, action, clearError, setAction} = useAuthUser();
    useEffect(() => {
        isUser();
        onRequest();
        // eslint-disable-next-line
    }, [])

    const onRequest = () => {
        clearError();
        getData('admin/users/?fields=id,login,name,email,type')
            .then(setUsersList)
            .then(() => setAction('loaded'));
    }

    const element = useMemo(() => SetContent(action, TabelPage, usersList),
        // eslint-disable-next-line
        [action])
    return (
        <>
            {element}
        </>
        
    )
}

export default UsersList;