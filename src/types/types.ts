type GlobalContent={
    name:string,
    path:string
}

interface geoPostion{
    coords: {
        latitude:number,
        longitude:number
    }
}

interface Err{
    message:string
}


export type{
    GlobalContent,
    geoPostion,
    Err,
}