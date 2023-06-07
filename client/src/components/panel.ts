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
export{
    panel
}