import { dialog, reload } from "./func";

// @flow strict
type Props={
    message:string
}
function Dialog(prop:Props) {
    return (
        <dialog id="d" className="rounded-md justify-center items-center flex flex-col lg:w-[35vw] max-md:w-[80vw]">
            <button onClick={dialog.close} className="ml-[auto]">
                <i className="ri-close-fill ri-lg"></i>
            </button>
            <div className="text-center pb-4">
                <p className="text-2xl  max-sm:text-xl my-2">An error has occurred</p>
                <p className="text-sm text-gray-400 lg:w-[300px]">
                    {prop.message}
                </p>
                <div className="flex justify-center mt-4">
                    <button className="bg-blue-500 text-white border-none px-4 py-2 text-xs rounded-md mr-6" onClick={reload}>Reload</button>
                    <button className="bg-white border text-blue-500 px-4 py-2 text-xs rounded-md ml-6" onClick={dialog.close}>Close</button>
                </div>
            </div>
        </dialog>
    );
};

export default Dialog;