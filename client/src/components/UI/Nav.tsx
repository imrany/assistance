import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { Link } from "react-router-dom";
import {dialog, panel} from "../func";
import img from "/icons/assistance-72x72.png"
import Feedback_Dialog from "./Feedback_Dialog";
// @flow strict
function Nav() {
    const {path}=useContext(GlobalContext)
    window.document.addEventListener("scroll",()=>{
        const panel=document.getElementById("panel") as HTMLDivElement
        panel.style.top="0"
    })
    const send_feedback=()=>{
        dialog.feedback_open()
        panel.close()
    }
    return (
        <header>
            <div className="flex justify-between pt-6 px-20 max-md:px-10">
                <Link className="logo text-xl" to={path}>
                    <img src={img} className="w-[40px] h-[40px] rounded-lg"/>
                </Link>
                <div className="cursor-pointer" onClick={panel.open}>
                    <i className="ri-menu-3-fill ri-lg text-gray-500"></i>
                </div>
            </div>

            <div className="fixed right-0 left-0 top-0 max-sm:top-14 bg-white py-6 px-4 shadow-lg max-sm:left-[37vw] max-sm:w-[63vw]" onClick={panel.close} id="panel">
                <ul className="w-full">
                    <li className="my-4" onClick={panel.close}>
                        <Link to="/settings">Settings</Link>
                    </li>
                    <li className="my-4" onClick={panel.close}>
                        <Link to="/activity">Explore</Link>
                    </li>
                    <li className="my-4" onClick={panel.close}>
                        <Link to="/help">Help</Link>
                    </li>
                    <li className="my-4 cursor-pointer" onClick={send_feedback}>
                        <p>Send Feedback</p>
                    </li>
                    <li className="my-4" onClick={panel.close}>
                        <Link to="/auth/sign_in">Get Started</Link>
                    </li>
                </ul>
            </div>
            <Feedback_Dialog/>
        </header>
    );
};

export default Nav;