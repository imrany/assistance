import { Err, geoPostion } from "./types/types.js"

if('serviceWorker' in navigator){
    navigator.serviceWorker.register("./sw.ts")
    .then(()=>console.log('sw registered'))
    .catch((err)=>console.log('sw not registerd', err))
}

const successCallback=(position:geoPostion)=>{
    const {latitude, longitude}= position.coords;
    console.log(latitude,longitude)
}
const errorCallback=(error:Err)=>{
    console.log(error.message);
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


//checking and asking permission
if(Notification.permission === 'granted'){
    //showNotification();
 }else if(Notification.permission !== 'denied'){
     Notification.requestPermission().then(permission =>{
         if(permission === "granted"){
             //showNotification();
         }
     });
 };

// training oop 
// class geolocation{
//     position:geoPostion
//     error:Err
//     constructor(position:geoPostion,error:Err){
//         this.position=position
//         this.error=error
//     }
//     success(){
//         const {latitude, longitude}= this.position.coords;
//         console.log(latitude,longitude)
//     }
//     fail(){
//         console.log(this.error.message);
//     }
// }
// let successCallback=new geolocation()