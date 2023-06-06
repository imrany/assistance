// @flow strict
import { useEffect, useState } from "react";
type Status={
    value:boolean,
    text:string
}
function status() {
    const [status,setStatus]=useState<Status>({
        value:false,
        text:"Neither"
    })
    useEffect(()=>{
        if (navigator.onLine) {
            setStatus({
                value:navigator.onLine,
                text:"Back online"
            })
        } else {
            setStatus({
                value:navigator.onLine,
                text:"No internet connection"
            })
        }
    },[])
  
    return status
};

export {
    status
};