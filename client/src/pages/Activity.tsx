// @flow strict

import PageHeader from "../components/UI/PageHeader";
import img from "/icons/assistance-72x72.png"
function Activity() {
    const history=[
        {
            index:1,
            request:"Hey",
            response:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet aut doloremque vitae quis minus accusamus minima. Quas dicta non beatae?"
        },
        {
            index:2,
            request:"Hello",
            response:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet aut doloremque vitae quis minus accusamus minima. Quas dicta non beatae?"
        }     
    ]
    const val={
        title:"My activity"
    }
    return (
        <div>
            <PageHeader val={val}/>
            <div className="flex flex-col py-4 px-4">
                <div className="lg:px-14 pt-">
                    <div className="mb-12">
                        {history&&history.map(i=>(
                            <div className="my-6 border-b-[1px] pb-4" key={i.index}>
                                <div className="flex">
                                    <img src={img} className="w-[40px] h-[40px] rounded-lg"/>
                                    <p className="text-gray-500 text-base ml-6 mt-2">Assistance</p>
                                </div>
                                <p className="text-base my-3">Said <span className="text-blue-500">{i.request}</span></p>
                                <p className="text-sm w-fit text-gray-600">{i.response}</p>
                                <div className="flex mt-6 text-gray-500">
                                    <p className="text-sm">1:44 pm</p>
                                    <i className="ri-sm ri-map-pin-fill mx-2"></i>
                                    <p className="text-sm mx-2">Details</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;