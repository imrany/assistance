// @flow strict
import PageHeader from "../components/UI/PageHeader";

function Help() {
    const val={
        title:"Help"
    }
    return (
        <div>
            <PageHeader val={val}/>
            <div className="flex flex-col py-4 px-4">
                <div className="lg:px-14 pt-6 h-[80vh] lg:h-[95vh]">
                    <p>Help</p>
                </div>
            </div>
        </div>
    );
};

export default Help;