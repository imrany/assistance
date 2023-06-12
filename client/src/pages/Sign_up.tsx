// @flow strict

import PageHeader from "../components/UI/PageHeader";

function Sign_up() {
    const val={
        title:"Sign up"
    }
    return (
        <div>
            <PageHeader val={val}/>
            <div className="flex flex-col py-4 px-4">
                <div className="lg:px-14 pt-6 h-[80vh] lg:h-[95vh]">
                    <p>Sign up</p>
                </div>
            </div>
        </div>
    );
};

export default Sign_up;