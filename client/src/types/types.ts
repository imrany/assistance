type GlobalContent={
    name:string,
    path:string,
    db:any,
    version:string
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
    response:string,
    more:string
}[]

type Status={
    value:boolean,
    text:string
}

type PageHeaderType={
    title:string
}

type DataAdded={
    index:number,
    request:string,
    response:string,
    more:string,
    time:string
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