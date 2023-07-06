// @flow strict
import { useEffect, useState } from "react";
import { Status } from "../types/types";
import { update_cache } from "./func";

function status() {
    const [status,setStatus]=useState<Status>({
        value:false,
        text:"Neither"
    })
    useEffect(()=>{
        if (navigator.onLine) {
            update_cache("site-dynamic")
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