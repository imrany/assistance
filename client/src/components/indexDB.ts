const indexedDB =window.indexedDB 

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
    const objectStore = db.createObjectStore("Chats", { keyPath: "index" });
    
    objectStore.createIndex("index", ["index"], { unique: true });
    objectStore.createIndex("request", ["request"], { unique: false });
    objectStore.createIndex("response", ["response"], { unique: false });
    objectStore.createIndex("more", ["more"], { unique: false });
    objectStore.createIndex("time", ["time"], { unique: false });
};

export{
   request
}