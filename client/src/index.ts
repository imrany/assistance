import { Err, geoPostion } from "./types/types.js"

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

function install(){
    window.addEventListener('beforeinstallprompt',(e:any) => {
        if (localStorage.getItem("installed")) {
            // don't display install banner when installed
            return e.preventDefault();
        } else {
            const btn = document.querySelector('#install') as HTMLDivElement
            const container=document.getElementById("install_indicator") as HTMLElement
            const input=document.getElementById("show-input") as HTMLDivElement
            input.style.bottom="0"
            container.hidden = false;
            btn.onclick =()=> e.prompt();
            localStorage.setItem("installed","install assistance")
            return e.preventDefault();
        }
    });
}
install()