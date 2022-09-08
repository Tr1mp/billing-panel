import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useHttp } from "../hooks/http.hook";

const useAuthUser = () => {
    const _urlApptrix = "http://erp.apptrix.ru/api/token/"; 
    const navigate = useNavigate();
    const {request} = useHttp();
    
    const [header, setHeader] = useState({});
    
    
    const isUser = () => {
        // Закомментил, так как запрос с Header "Authorization: Bearer #TOKEN#" выдает ошибку 400.
        // middleware();
        return localStorage.getItem('access') ? login() : logout();
    }

    const login = () => {
        setHeader({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`  
        });
        return navigate('/');
    }

    const logout = () => {
        setHeader({
            'Content-Type': 'application/json'
        });
        if (localStorage.getItem('access')) {
            localStorage.removeItem('access')
        }
        if (localStorage.getItem('refresh')) {
            localStorage.removeItem('refresh')
        }
        return navigate('/login');
    }

    const rememberToken = (tokens) => {
        localStorage.setItem('access', tokens.access);
        localStorage.setItem('refresh', tokens.refresh);
        login();
    }


    // Можно было объединить в один функции с запросом, 
    // но тогда бы они были не читабельные и слишком сложные.

    const requetsLogin = (username, password) => {
        const body = JSON.stringify({username, password});
        return request(_urlApptrix, body, "POST")
            .then(rememberToken);
    } 
    
    const changeToken = () => {
        const body = JSON.stringify({
            refresh: localStorage.getItem('refresh')
        })
        request(`${_urlApptrix}refresh/`, body, 'POST')
            .then(rememberToken)
            .catch(logout);
    }

    // та самая функция, которая выдаёт ошибку 400 при запросе с токеном в header.
    const middleware = () => {
        request(_urlApptrix, null, "POST", header)
            .then(rememberToken)
            .catch(err => err.message === '401' ? changeToken : console.log(err));
    }

    return {isUser, login, logout, requetsLogin}
}

export default useAuthUser;