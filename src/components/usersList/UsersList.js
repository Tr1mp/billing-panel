
import { useEffect } from 'react';


import useAuthUser from '../../services/AuthUser';



import './usersList.scss';

const UsersList = () => {
    const {isUser} = useAuthUser();
    useEffect(() => {
        isUser();
    }, [])

    return (

        <ul>
            <li className="tasks__list_item">
                <div className="tasks__list_item_text_id">
                    2-202
                </div>
                <div className="tasks__list_item_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deleniti?
                </div>
                <div className="tasks__list_item_text">
                    Sample Project
                </div>
            </li>
            <li className="tasks__list_item">
                <div className="tasks__list_item_text_id">
                    2-202
                </div>
                <div className="tasks__list_item_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deleniti?
                </div>
                <div className="tasks__list_item_text">
                    Sample Project
                </div>
            </li>
            <li className="tasks__list_item">
                <div className="tasks__list_item_text_id">
                    2-202
                </div>
                <div className="tasks__list_item_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deleniti?
                </div>
                <div className="tasks__list_item_text">
                    Sample Project
                </div>
            </li>
            <li className="tasks__list_item">
                <div className="tasks__list_item_text_id">
                    2-202
                </div>
                <div className="tasks__list_item_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deleniti?
                </div>
                <div className="tasks__list_item_text">
                    Sample Project
                </div>
            </li>
            <li className="tasks__list_item">
                <div className="tasks__list_item_text_id">
                    2-202
                </div>
                <div className="tasks__list_item_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deleniti?
                </div>
                <div className="tasks__list_item_text">
                    Sample Project
                </div>
            </li>
        </ul>
    )
}

export default UsersList;