import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useHttp } from "../hooks/http.hook";

const useAuthUser = () => {
    const _urlApptrix = "http://erp.apptrix.ru/api/token/";
    const _urlYoutrack = "https://example.youtrack.cloud/api/";
    const apikey = process.env.REACT_APP_API_KEY;
    const navigate = useNavigate();
    const {request} = useHttp();
    const location = useLocation();
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
        return  location.pathname === '/login' ?  navigate('/') : null;
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
        if (localStorage.getItem('username')) {
            localStorage.removeItem('username')
        }
        return navigate('/login');
    }

    const rememberToken = (tokens, username) => {
        localStorage.setItem('access', tokens.access);
        localStorage.setItem('refresh', tokens.refresh);
        localStorage.setItem('username', username);
        login();
    }


    // Можно было объединить в один функции с запросом, 
    // но тогда бы они были не читабельные и слишком сложные.

    const requetsLogin = async (username, password) => {
        const body = await JSON.stringify({username, password});
        return await request(_urlApptrix, body, "POST")
            .then(tokens => rememberToken(tokens, username));
    } 
    
    const changeToken = async () => {
        const body =  await JSON.stringify({
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


    const getData = async (url) => {
        const res = await request(`${_urlYoutrack}${url}`, null, 'GET', {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${apikey}`
        })
        return res;
    }

    const getTasksByName = async (name) => {
        const res = await request(`${_urlYoutrack}issues?fields=id,summary,project(name)&query=project:+%7B${name}%7D`,
        null, 'GET', {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${apikey}`
        });
        return res;
    }


    return {isUser, login, logout, requetsLogin, getData, getTasksByName}
}

export default useAuthUser;