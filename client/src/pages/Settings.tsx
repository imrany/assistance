// @flow strict

import PageHeader from "../components/UI/PageHeader";

function Settings() {
    const val={
        title:"Settings"
    }
    return (
        <div className="flex flex-col py-4 px-4">
            <PageHeader val={val}/>
        </div>
    );
};

export default Settings;