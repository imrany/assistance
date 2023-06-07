const indexedDB =window.indexedDB 

let db:any
if (!indexedDB) {
console.log("IndexedDB could not be found in this browser.");
}

const dbName="assistanceDB"
const request = window.indexedDB.open(dbName, 3);
request.onerror = (event:any) => {
    console.log(event.target.result)
};

request.onupgradeneeded = (event:any) => {
    const db = event.target.result;
    const objectStore = db.createObjectStore("Chats", { keyPath: "id" });
  
    objectStore.createIndex("request", ["request"], { unique: false });
    objectStore.createIndex("response", ["response"], { unique: false });
};

request.onsuccess=(event:any)=>{
    const DB=event.target.result;
    getDB(DB)
}
function getDB(DB:any){
    db=DB
}

export{
   db
}