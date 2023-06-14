import { panel } from "../components/func";

// @flow strict
function Fallback() {
    return (
        <>
            <div className='flex flex-col h-[75vh] justify-center items-center' onClick={panel.close}>
                        <p className='text-base max-sm:text-sm text-center'>Oops!.. you cannot view this page offline.</p>
            </div>
        </>
    );
};

export default Fallback;