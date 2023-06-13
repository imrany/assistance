// @flow strict

import { useNavigate } from "react-router-dom";
import { dialog } from "../func";

function Switch_Dialog() {
    const navigate=useNavigate()
    const add_account=()=>{
        navigate('/auth/sign_up')
        dialog.switch_close()
    }
    return (
        <dialog id="s" className="shadow-lg rounded-md justify-center items-center flex flex-col lg:w-[35vw] max-md:w-[80vw] max-sm:w-[75vw] pb-6 h-fit max-sm:scale-[0.9]">
            <button onClick={dialog.switch_close} className="ml-[auto]">
                <i className="ri-close-fill ri-lg hover:text-blue-500"></i>
            </button>
            <div className="flex flex-col">
                <div className="flex">
                    <i className="ri-user-fill bg-green-500 h-8 w-8 text-center pt-1 text-gray-100 mr-4 rounded-[50px]"></i>
                    <div className="flex flex-col">
                        <p className="text-base font-semibold text-gray-800">
                            John Doe
                        </p>
                        <p className="text-xs text-gray-400">
                            johndoe@gmail.com
                        </p>
                    </div>
                </div>
                <div className="flex justify-around mt-4">
                    <button className="text-gray-500 px-4 text-sm w-full rounded-md" onClick={add_account}>
                        <i className="ri-add-fill ri-lg mr-2 -mb-10"></i>
                        Add account
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default Switch_Dialog;