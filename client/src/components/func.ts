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
    }
}

const reload=()=>{
    window.location.reload()
}
export{
    panel,
    dialog,
    reload
}