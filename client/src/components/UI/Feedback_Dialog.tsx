// @flow strict

import { dialog } from "../func";

function Feedback_Dialog() {
    const $continue=()=>{
        window.location.href="mailto:imranmat254@gmail.com"
    }
    return (
        <dialog id="d" className="shadow-lg max-sm:rounded-t-[30px] rounded-xl justify-center items-center flex flex-col max-sm:w-[100vw] pb-10 h-fit max-sm:-mb-[0]">
            <button onClick={dialog.close} className="ml-[auto]">
                <i className="ri-close-fill ri-lg"></i>
            </button>
            <p className="text-2xl  max-sm:text-sm font-semibold my-4">Send feedback to Assistance</p>
            <div className="px-2 md:text-center">
                <p className="text-sm max-sm:text-xs  lg:w-[300px]">
                    We are constantly improving our product by listening to your feedback.
                </p>
                <p className="text-sm max-sm:text-xs text-gray-400 lg:w-[300px]">
                    Send as emails of your requests, views, feedback and updates
                </p><br/>
                <p className="text-[11px] text-gray-400">Send feedback as <span className="font-semibold text-gray-700">person@gmail.com</span> <i className="ri-edit-line"></i></p>

                <div className="flex justify-center mt-6">
                    <button className="bg-blue-500 text-white border-none px-4 max-sm:w-[70vw] max-sm:font-semibold py-2 text-xs rounded-2xl cursor-pointer" onClick={$continue}>Continue to email</button>
                </div>
            </div>
        </dialog>
    );
};

export default Feedback_Dialog;