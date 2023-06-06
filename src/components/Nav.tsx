import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { Link } from "react-router-dom";
import {panel} from "./panel";

// @flow strict
function Nav() {
    const {name, path}=useContext(GlobalContext)
    
    return (
        <header>
            <div className="flex justify-between pt-6 px-20 max-md:px-10">
                <Link className="logo text-xl" to={path}>{name}</Link>
                <div className="cursor-pointer" onClick={panel.open}>
                    <i className="ri-menu-3-fill ri-lg text-gray-500"></i>
                </div>
            </div>

            <div className="bg-white py-6 px-4 shadow-lg max-sm:ml-[40vw] max-sm:w-[200px]" id="panel">
                <ul>
                    <li className="my-2" onClick={panel.close}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="my-2" onClick={panel.close}>
                        <Link to="/settings">Settings</Link>
                    </li>
                    <li className="my-2" onClick={panel.close}>
                        <Link to="/explore">Explore</Link>
                    </li>
                    <li className="my-2" onClick={panel.close}>
                        <Link to="/help">Help</Link>
                    </li>
                    <li className="my-2" onClick={panel.close}>
                        <Link to="/send_feedback">Send Feedback</Link>
                    </li>
                    <li className="my-2" onClick={panel.close}>
                        <Link to="">Privacy policy</Link>
                    </li>
                    <li className="my-2" onClick={panel.close}>
                        <Link to="">Terms of service</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Nav;