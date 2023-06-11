import { dialog } from "./func";

// @flow strict
type Props={
    message:string
}
function Dialog(prop:Props) {
    return (
        <dialog id="d" className="rounded-md">
            <button onClick={dialog.close} className="float-right">
                <i className="ri-close-fill"></i>
            </button>
            <p>{prop.message}</p>
        </dialog>
    );
};

export default Dialog;