import { useCallback, useState } from "react";

export const useHttp = () => {
    const [action, setAction] = useState('loaded');

    const request = useCallback(async (url, 
                    body = null,
                    method = 'GET', 
                    headers = {'Content-Type': 'application/json'}) => {
                        
        setAction('loading');

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(response.status);
            }
            
            const data = await response.json();

            return data;

        } catch(e) {
            // Чтобы самому на них реагировать, выводить сообщеине о том,
            // что пользователь ошибся в лог/пароль или токен истёк
            if (e.message !== '401') {
                setAction('error');
            } else {
                setAction('loaded');
            }
            throw e;
        }
    }, [])

    const clearError = useCallback(() => setAction('loading'), [])

    return {request, clearError, action, setAction}
}