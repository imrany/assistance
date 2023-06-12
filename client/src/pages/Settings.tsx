// @flow strict

import PageHeader from "../components/UI/PageHeader";

function Settings() {
    const val={
        title:"Settings"
    }
    return (
        <div className="flex flex-col py-4 px-4">
            <PageHeader val={val}/>
            <div className="lg:px-14 py-6 ">
                <p className="text-lg text-blue-500">Account</p>
            </div>
        </div>
    );
};

export default Settings;