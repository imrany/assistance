// @flow strict

function Dialog() {
   
    const close_dialog=()=>{
        const d=document.getElementById("d") as HTMLDialogElement
        d.close()
    }
    return (
        <dialog id="d">
            <p>Dialog</p>
            <button onClick={close_dialog}>Close dialog</button>
        </dialog>
    );
};

export default Dialog;