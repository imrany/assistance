// @flow strict
type Props={
    message:string
}
function Dialog(prop:Props) {
    const close_dialog=()=>{
        const d=document.getElementById("d") as HTMLDialogElement
        d.close()
    }
    return (
        <dialog id="d" className="rounded-md">
            <button onClick={close_dialog} className="float-right">
                <i className="ri-close-fill"></i>
            </button>
            <p>{prop.message}</p>
        </dialog>
    );
};

export default Dialog;