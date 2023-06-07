import { Link } from "react-router-dom";

// @flow strict
function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 text-white bg-blue-600 flex justify-between py-5 px-20 max-md:px-4">
            <p className="max-md:text-sm">Unlock more features</p>
            <Link to="/getstarted" className="font-semibold max-md:text-sm">GET STARTED</Link>
        </footer>
    );
};

export default Footer;