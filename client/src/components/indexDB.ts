const indexedDB =window.indexedDB 

let db:any;
if (!indexedDB) {
console.log("IndexedDB could not be found in this browser.");
}

const dbName="assistanceDB"
const request = window.indexedDB.open(dbName, 3);
request.onerror = (event:any) => {
    console.log(event.target.result)
};

request.onupgradeneeded = (event:any) => {
    db = event.target.result;
    const objectStore = db.createObjectStore("Chats", { keyPath: "id" });
  
    objectStore.createIndex("request", ["request"], { unique: false });
    objectStore.createIndex("response", ["response"], { unique: false });
};
type interactDBType={
    id:string,
    request:string,
    response:string
}
class interact{
    id
    request
    response
    constructor(props:interactDBType) {
        this.id=props.id,
        this.request=props.request,
        this.response=props.response
    }
    trial(){
        console.log(`this is trial id:${this.response}`)
    }
    
}
request.onsuccess=(event:any)=>{
    db=event.target.result;
    console.log(db)
}
const interact=new int
console
export{
   db
}