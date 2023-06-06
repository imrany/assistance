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
        <header>
            <div className="flex justify-between pt-6 px-20 max-md:px-10">
                <Link className="logo text-xl" to={path}>{name}</Link>
                <div className="cursor-pointer" onClick={popover}>
                    <i className="ri-menu-3-fill ri-lg text-gray-500"></i>
                </div>
            </div>
        </header>
    );
};

export default Nav;