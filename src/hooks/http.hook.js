import { useCallback } from "react";

export const useHttp = () => {
    const request = useCallback(async (url, 
                    body = null,
                    method = 'GET', 
                    headers = {'Content-Type': 'application/json'}) => {
        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(response.status);
            }
            const data = await response.json();

            return data;

        } catch(e) {
            throw e;
        }
    }, [])

    return {request}
}