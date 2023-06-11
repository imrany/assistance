import { useNavigate } from "react-router-dom";
import { PageHeaderType } from "../../types/types";

// @flow strict
type Props = {
    val:PageHeaderType
};

function PageHeader(prop: Props) {
    const navigate=useNavigate()
    const back=()=>{
        navigate(-1)
    }
    return (
        <div className="fixed top-0 right-0 left-0 bg-white text-gray-500 shadow-md h-16">
            <div className="flex pt-5 px-20 max-md:px-3">
                <i className="ri-arrow-left-line ri-2x -mt-2 max-sm:-mt-3 cursor-pointer font-thin" onClick={back}></i>
                <p className="text-2xl max-sm:text-xl  ml-8">{prop.val.title}</p>
            </div>
        </div>
    );
};

export default PageHeader;