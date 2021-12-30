import { useEffect, useState } from "react"

export const Timer = () => {
    const [counter, setCounter] = useState(20);
    useEffect(() => {
        const id = setInterval(() => {
            // setCounter(counter - 1);
            setCounter((p) => {
                if(p === 0) {
                    clearInterval(id)
                    return 0;
                }
                return p-1;
            })
        }, 1000);
        return () => {
            //Unmounting
            console.log("Unmounting")
            clearInterval(id);
        }
    }, []);
    return <li>Counter is : {counter} </li>
}