import logo from "/favicon.png"
// @flow strict
function Footer() {
    return (
        <>
        {!localStorage.getItem("installed")?(
            <footer className="fixed bottom-0 left-0 right-0 bg-gray-50 rounded-t-[15px] shadow-2xl flex justify-between py-5 px-20 max-md:px-4" id="install_indicator"  hidden>
                <div className="flex">
                    <img src={logo} alt="." className="w-8 h-8 rounded-[5px]"/>
                    <p className="ml-2 max-md:text-sm my-1 font-semibold text-base">Assistance</p>
                </div>
                <div className="bg-blue-600 py-2 text-white px-5 rounded-[30px] font-semibold max-md:text-sm cursor-pointer" id="install" title="Install Assistance">Install</div>
            </footer>
        ):(
            <></>
        )}
        </>
    );
};

export default Footer;