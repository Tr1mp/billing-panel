

import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import useAuthUser from '../../services/AuthUser';
import SetContent from "../../util/SetContent";

import "./userCard.scss";

const UserCard = () => {

    const {id} = useParams();
    const {getData, isUser, action, clearError, setAction} = useAuthUser();
    const [user, setUser] = useState([]);


    useEffect(() => {
        isUser();
        onRequest()
        // eslint-disable-next-line
    }, [id])

    const onRequest = () => {
        clearError();
        getData(`admin/users/${id}?fields=id,login,name,email,type`)
            .then(setUser)
            .then(() => setAction('loaded'));
    }

    function renderItem(obj) {
        const {id, name, $type, login, email} = obj;
        return (
            <div className="user__card">
                <div className="user__card-round">
                    <h3 className="user__card-round-id">
                        {id}
                    </h3>
                </div>
                <div className="user__card-wrapper">
                    <h2 className="user__card-name">
                        {name}                    
                    </h2>
                    <span>{$type}</span>
                    <p className="user__card-text">
                        <span className="user__card-text-span">login:</span> <br/> {login}
                    </p>
                    <p className="user__card-text">
                        <span className="user__card-text-span">e-mail:</span> <br/> {email}
                    </p>
                </div>
            </div>
        )
    }

    const item = useMemo(() => SetContent(action, () => renderItem(user)), 
        // eslint-disable-next-line
        [action])
    return (
        <> 
            <Helmet>
                <meta
                    name="description"
                    content="User Card"
                />
                <title>User Card</title>
            </Helmet>
            {item}
        </>
    )
}

export default UserCard;