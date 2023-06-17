import { Link } from "react-router-dom";

// @flow strict
function Footer() {
    const close=()=>{
        const footer=document.querySelector("footer") as HTMLElement
        const input=document.getElementById("show-input") as HTMLDivElement
        footer.classList.add("close")
        input.style.bottom="0"
    }
    return (
        <footer className="fixed bottom-0 left-0 right-0 text-white bg-blue-600 flex justify-between py-5 px-20 max-md:px-4">
            <p className="max-md:text-sm">Unlock more features</p>
            <Link to="/auth/sign_up" className="font-semibold max-md:text-sm cursor-pointer" onClick={close}>GET STARTED</Link>
        </footer>
    );
};

export default Footer;