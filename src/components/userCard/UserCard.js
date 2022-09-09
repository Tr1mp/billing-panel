

import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import useAuthUser from '../../services/AuthUser';

import "./userCard.scss";

const UserCard = () => {

    const {id} = useParams();
    const {getData, isUser} = useAuthUser();
    const [user, setUser] = useState([]);


    useEffect(() => {
        isUser();
        onRequest()
        // eslint-disable-next-line
    }, [id])

    const onRequest = () => {
        getData(`admin/users/${id}?fields=id,login,name,email,type`)
            .then(setUser);
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

    const item = useMemo(() => renderItem(user),
        
        [user])
    return (
        <> 
            {item}
        </>
    )
}

export default UserCard;