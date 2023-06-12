// @flow strict
import { Link } from "react-router-dom";
import PageHeader from "../components/UI/PageHeader";
import { dialog } from "../components/func";
import { useState } from "react";
import Location_Dialog from "../components/UI/Location_Dialog";

function Settings() {
    const [alert,setAlert]=useState("")
    const val={
        title:"Settings"
    }
    const open=()=>{
        dialog.open()
        setAlert("Turn on your location")
    }
    return (
        <div className="flex flex-col py-4 px-4">
            <PageHeader val={val}/>
            <div className="border-b-[1px]">
                <div className="lg:px-14 pt-6 h-[80vh] lg:h-[95vh]">
                    <div className="mb-8">
                        <p className="text-lg text-blue-500">Account</p>
                        <p className="text-xl max-sm:text-base">Switch account</p>
                        <p className="text-sm text-gray-400">Signed in as person@gmail.com</p>
                    </div>

                    <div className="mt-8">
                        <Link to="/activity" className="text-lg max-sm:text-base"><i className="ri-cactus-line"></i> My Activity</Link>
                        <p className="text-sm text-gray-400 max-md:text-base max-sm:text-sm ml-5">View Chat history.</p>
                    </div>

                    <button className="mt-8" onClick={open}>
                        <p className="text-xl max-sm:text-base"><i className="ri-user-location-line"></i> Location</p>
                    </button>

                    <div className="mt-8">
                        <p className="text-xl max-sm:text-base"><i className="ri-contract-up-down-line"></i> Fine tune</p>
                        <p className="text-sm text-gray-400 max-md:text-base max-sm:text-sm ml-5">80%</p>
                    </div>

                    <div className="mt-8">
                        <a href="https://wa.me/254734720752" className="text-xl max-sm:text-base"><i className="ri-question-line"></i> Help</a>
                        <p className="text-sm text-gray-400 max-md:text-base max-sm:text-sm ml-5">Help center, contact us, privacy policy.</p>
                    </div>
                </div>
            </div>
            <Location_Dialog message={alert}/>
            <div className="lg:px-14 py-4">
                <div className="">
                    <p className="text-lg text-blue-500">Legal information</p>
                    <a href="" className="max-sm:text-sm">Open source licenses</a>
                </div>
            </div>
        </div>
    );
};

export default Settings;