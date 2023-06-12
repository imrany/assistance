// @flow strict

import { Link } from "react-router-dom";
import PageHeader from "../components/UI/PageHeader";

function Settings() {
    const val={
        title:"Settings"
    }
    return (
        <div className="flex flex-col py-4 px-4">
            <PageHeader val={val}/>
            <div className="border-b-[1px]">
                <div className="lg:px-14 pt-6 h-[70vh]">
                    <div className="mb-8">
                        <p className="text-lg text-blue-500">Account</p>
                        <p className="text-xl max-sm:text-base">Switch account</p>
                        <p className="text-sm text-gray-400">Signed in as person@gmail.com</p>
                    </div>

                    <div className="mt-8">
                        <Link to="/activity" className="text-lg max-sm:text-base">My Activity</Link>
                    </div>

                    <div className="mt-8">
                        <p className="text-xl max-sm:text-base">Location</p>
                    </div>

                    <div className="mt-8">
                        <p className="text-xl max-sm:text-base">Fine tune</p>
                        <p className="text-sm text-gray-400 max-md:text-base max-sm:text-sm">80%</p>
                    </div>
                </div>
            </div>
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