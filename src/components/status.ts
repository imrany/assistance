// @flow strict
window.addEventListener('load',()=>{
    if (navigator.onLine) {
        console.log("Back online")
        // window.location.href="/fallback"
    } else {
        console.log("No internet connection") 
    }
},false)