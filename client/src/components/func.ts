const panel={
    open:()=>{
        const panel=document.getElementById("panel") as HTMLDivElement
        panel.style.transition="ease-in-out"
        panel.style.display="block"
    },
    close:()=>{
        const panel=document.getElementById("panel") as HTMLDivElement
        panel.style.display="none"
    }
}
const dialog={
    close(){
        const d=document.getElementById("d") as HTMLDialogElement
        d.close()
    },
    open(){
        const d=document.getElementById("d") as HTMLDialogElement
        d.showModal()
    },
    feedback_close(){
        const d=document.getElementById("f") as HTMLDialogElement
        d.close()
    },
    feedback_open(){
        const d=document.getElementById("f") as HTMLDialogElement
        d.showModal()
    },
    switch_close(){
        const d=document.getElementById("s") as HTMLDialogElement
        d.close()
    },
    switch_open(){
        const d=document.getElementById("s") as HTMLDialogElement
        d.showModal()
    }
}

const reload=()=>{
    window.location.reload()
}
const scroll_bottom=()=>{
    const window_bottom=document.getElementById("window-bottom") as HTMLDivElement
    window_bottom.scrollIntoView()
}

//clear cache function as update'
const update_app = (name:string) => {
    caches.delete(name).then((m:any)=>{
        console.log(m)
    }).catch((err:any)=>{
        console.log(err)
    })
}

const check_version_app=()=>{
    const version=localStorage.getItem("version")
    if(!version){
        localStorage.setItem("version","1.0.0")
    }
}

export{
    panel,
    dialog,
    reload,
    scroll_bottom,
    update_app,
    check_version_app
}