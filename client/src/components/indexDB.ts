const indexedDB =window.indexedDB 

var db:any;
if (!indexedDB) {
console.log("IndexedDB could not be found in this browser.");
}

const dbName="assistanceDB"
const request = window.indexedDB.open(dbName, 3);
request.onerror = (event:any) => {
    console.log(event.target.result)
};

request.onsuccess=(event:any)=>{
    db=event.target.result;
}

request.onupgradeneeded = (event:any) => {
    const db = event.target.result;
    const objectStore = db.createObjectStore("Chats", { keyPath: "index", autoIncrement: true });
    
    objectStore.createIndex("index", ["index"], { unique: true });
    objectStore.createIndex("request", ["request"], { unique: false });
    objectStore.createIndex("response", ["response"], { unique: false });
};

export{
   request
}