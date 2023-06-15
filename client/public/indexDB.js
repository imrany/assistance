const indexedDB =window.indexedDB 

let db;
if (!indexedDB) {
console.log("IndexedDB could not be found in this browser.");
}
const dbName="assistanceDB"
const request = window.indexedDB.open(dbName, 3);
request.onerror = (event) => {
    console.log(event.target.result)
};

request.onupgradeneeded = (event) => {
    const db = event.target.result;
    const objectStore = db.createObjectStore("Chats", { keyPath: "index" });
    
    objectStore.createIndex("index", ["index"], { unique: true });
    objectStore.createIndex("request", ["request"], { unique: false });
    objectStore.createIndex("response", ["response"], { unique: false });
    objectStore.createIndex("more", ["more"], { unique: false });
    objectStore.createIndex("time", ["time"], { unique: false });
};

request.onsuccess=(event)=>{
    let db=event.target.result
    get_db(db)
}
request.onerror=(event)=>{
  console.log(event.target.result)
}

function get_db(idb){
    db=idb
}
console.log(db)
export{
    db
}