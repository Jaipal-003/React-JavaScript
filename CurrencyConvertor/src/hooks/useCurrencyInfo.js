import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data, setDate] = useState({})
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setDate(res[currency]))
        console.table(data);
    },[currency])
    return data
}

export default useCurrencyInfo;
