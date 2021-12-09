import { useCallback, useState } from "react"

const useApi = () => {
    const [error, setError] = useState(null);
    const sendData = useCallback(async (requestOptions, applyData) => {
        setError(null);

        try {
            const response = await fetch(requestOptions.url, {
                method: requestOptions.method ? requestOptions.method : 'GET',
                headers: requestOptions.headers ? requestOptions.headers : {},
                body: requestOptions.body ? JSON.stringify(requestOptions.body) : null
            })

            if (!response.ok) {
                throw new Error("Request Failed");
            }

            const data = await response.json();
            applyData(data);
        } catch (err) {
            setError(err.message || "Something went wrong")
        }
    }, []);

    return {
        error,
        sendData
    }
}

export default useApi;