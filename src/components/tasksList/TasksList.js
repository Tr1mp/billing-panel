


import { useEffect, useMemo, useState } from 'react';
import useAuthUser from '../../services/AuthUser';
import TabelPage from '../tablePage/TabelPage';

const TasksList = () => {

    const [tasksList, setTasksList] = useState([]);
    const {getData} = useAuthUser();
    const {isUser} = useAuthUser();
    useEffect(() => {
        isUser();
        onRequest();
    }, [])


    const onRequest = () => {
        getData('issues?fields=id,summary,project(name)')
            .then(setTasksList);
    }

    const items = useMemo(() => <TabelPage list={tasksList}/>,
        // eslint-disable-next-line
        [tasksList]);


    return (
        <>
            {items}
        </>

    )
}

export default TasksList;