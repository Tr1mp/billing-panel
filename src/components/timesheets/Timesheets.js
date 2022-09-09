import './timesheets.scss';

import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import useAuthUser from "../../services/AuthUser";
import TabelPage from "../tablePage/TabelPage";
import SetContent from '../../util/SetContent';
import { Helmet } from 'react-helmet';

const Timesheets = () => {
    const {id} = useParams();
    const [timesheets, setTimesheets] = useState([]);
    const {getData, isUser, action, clearError, setAction} = useAuthUser();

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    useEffect(() => {
        isUser();
        onRequest();
        // eslint-disable-next-line
    }, [id])

    const onRequest = () => {
        clearError();
        getData(`issues/${id}/timeTracking/workItems?fields=id,duration(minutes),creator(name),type(name)`)
            .then(setTimesheets)
            .then(() => setAction("loaded"));
    }

    // Добавил ещё вывод name timesheet-a, чисто логически иначе не понятно
    // над чем работал пользователь всё это время
    function renderUsers(arr) {
        const items = arr.map((item) => {
            const hour = Math.floor(item.duration.minutes / 60);
            const minutes = item.duration.minutes - hour * 60;
            const time = `${hour} hour ${minutes} minutes`
            return {
                id: item.id,
                name: item.type.name,
                creator: item.creator.name,
                time: time
            };
        })

        return items;
    }

    const items = useMemo(() => renderUsers(timesheets),
        // eslint-disable-next-line
        [timesheets]);

    const element = useMemo(() => SetContent(action, TabelPage, items),
        // eslint-disable-next-line
        [action]);
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Timesheets"
                />
                <title>Timesheets</title>
            </Helmet>
            {items.length ? <button className='btn btn-primary small print'
                    onClick={handlePrint}>
                Print PDF
            </button> : null}
            <div ref={componentRef}>
                {element}
            </div>
            
        </>
    )
}

export default Timesheets;