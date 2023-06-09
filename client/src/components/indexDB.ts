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

class interact{
    id:string
    request:string
    response:string
    constructor( id:string,request:string,response:string) {
        this.id=id,
        this.request=request,
        this.response=response
    }
    trial(){
        return `this is trial id:${this.response}`
    }
    
}
request.onsuccess=(event:any)=>{
    db=event.target.result;
    console.log(db)
}
const intDB=new interact("454","hey","nice")
console.log(intDB)
export{
   db
}