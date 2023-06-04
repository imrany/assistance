import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { Link } from "react-router-dom";

// @flow strict
function Nav() {
    const {name, path}=useContext(GlobalContext)
    const popover=()=>{
        alert("nice")
    }
    return (
        <div className="flex justify-between pt-6 px-20 max-md:px-10">
            <Link to={path}>{name}</Link>
            <div className="cursor-pointer" onClick={popover}>
                <i className="ri-lock-fill ri-lg text-gray-500"></i>
            </div>
        </div>
    );
};

export default Nav;