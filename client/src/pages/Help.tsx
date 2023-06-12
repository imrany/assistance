// @flow strict
import { Link } from "react-router-dom";
import PageHeader from "../components/UI/PageHeader";

function Help() {
    const val={
        title:"Help"
    }
    return (
        <div>
            <PageHeader val={val}/>
            <div className="flex flex-col pb-4 h-[80vh] lg:h-[95vh]">
                <a href="mailto:imranmat254@gmail.com">
                    <div className="py-4 border-b-[1px] hover:bg-gray-200 cursor-pointer">
                        <div className="lg:px-14 px-4">
                            <p className="text-lg max-sm:text-base"><i className="ri-question-line"></i> Help Center</p>
                            <p className="text-sm text-gray-400 max-md:text-base max-sm:text-sm ml-5">Send us an email.</p>
                        </div>
                    </div>
                </a>

                <a href="tel:+254734720752">
                    <div className="py-4 border-b-[1px] hover:bg-gray-200 cursor-pointer">
                        <div className="lg:px-14 px-4">
                            <p className="text-lg max-sm:text-base"><i className="ri-user-line"></i> Contact us</p>
                            <p className="text-sm text-gray-400 max-md:text-base max-sm:text-sm ml-5">Contact us and get answers.</p>
                        </div>
                    </div>
                </a>

                <Link to="/app_info">
                    <div className="py-4 border-b-[1px] hover:bg-gray-200 cursor-pointer">
                        <div className="lg:px-14 px-4">
                            <p className="text-lg max-sm:text-base"><i className="ri-information-line"></i> App info</p>
                            <p className="text-sm text-gray-400 max-md:text-base max-sm:text-sm ml-5">Software versions and updates.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Help;