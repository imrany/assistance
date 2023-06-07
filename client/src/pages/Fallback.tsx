import { panel } from "../components/panel";

// @flow strict
function Fallback() {
    return (
        <div className='flex flex-col h-[75vh] justify-center items-center' onClick={panel.close}>
           <div className="border-[1px] px-3 py-3 rounded-[20px] max-md:w-[90vw]">
                <p className='text-base max-sm:text-sm text-center'>Oops! Currently you cannot view this page.</p>
           </div>
        </div>
    );
};

export default Fallback;