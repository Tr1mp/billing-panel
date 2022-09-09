


import { useEffect, useMemo, useState } from 'react';
import useAuthUser from '../../services/AuthUser';
import TabelPage from '../tablePage/TabelPage';

import './tasksList.scss';

const TasksList = () => {
    const [text, setText] = useState('');
    const [tasksList, setTasksList] = useState([]);
    const {getData, getTasksByName} = useAuthUser();
    const {isUser} = useAuthUser();
    useEffect(() => {
        isUser();
        onRequest();
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (text.length > 2) {
            onRequestByName();
        } else if (!text.length) {
            onRequest()
        }
        // eslint-disable-next-line
    }, [text])

    const onRequestByName = () => {
        getTasksByName(text)
            .then(setTasksList);
    }

    const onRequest = () => {
        getData('issues?fields=id,summary,project(name)')
            .then(setTasksList);
    }

    const items = useMemo(() => <TabelPage list={tasksList}/>,
        // eslint-disable-next-line
        [tasksList]);


    return (
        <>
            <div className="tasks__list-search">
                <div className="form-title" style={{fontSize: 22, margin: "0 auto"}}>
                    Enter project name
                </div>
                <div className="form-group" style={{marginTop: 0}}>
                    <input 
                        id="search"
                        name="search" 
                        className="form-group-input"
                        type="text"
                        placeholder=" " 
                        value={text}
                        onChange={e => setText(e.target.value)}/>
                    <div className="form-group-cut"></div>
                    <label 
                        htmlFor="search" 
                        className="form-group-placeholder">
                            search
                    </label>
                </div>
            </div>
            {items}
        </>

    )
}

export default TasksList;