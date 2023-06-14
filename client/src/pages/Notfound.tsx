import { panel } from "../components/func";

// @flow strict
function Notfound() {
    return (
        <>
            <div className='flex flex-col h-[100vh] justify-center items-center' onClick={panel.close}>
                <p className="text-5xl mb-2 text-gray-700 font-semibold text-center">404</p>
                <p className='text-lg text-gray-600 max-sm:text-sm text-center'>This page does not exit.</p>
            </div>
        </>
    );
};

export default Notfound;