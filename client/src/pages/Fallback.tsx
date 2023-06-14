// @flow strict
function Fallback() {
    return (
        <>
             <div className='flex flex-col h-[100vh] justify-center items-center'>
                <i className="ri-cloud-off-line ri-3x text-gray-700"></i>
                <p className='text-lg text-gray-600 max-sm:text-sm text-center'>You can view this page offline.</p>
            </div>
        </>
    );
};

export default Fallback;