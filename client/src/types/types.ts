type GlobalContent={
    name:string,
    path:string,
    db:any
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

type Data={
    request:string,
    response:string
}[]

type Status={
    value:boolean,
    text:string
}

type PageHeaderType={
    title:string
}

type DataAdded={
    request:string,
    response:string
}

export type{
    GlobalContent,
    geoPostion,
    Err,
    Data,
    Status,
    PageHeaderType,
    DataAdded
}