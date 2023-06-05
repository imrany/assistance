// @flow strict
function NotFound() {
    return (
        <div className='flex flex-col h-[75vh] justify-center items-center'>
            <div className="border-[1px] px-4 py-3 rounded-[20px] max-sm:w-[90vw]">
                <p className='text-base max-sm:text-sm text-center'>Oops!! Currently this page is not available.</p>
            </div>
        </div>
    );
};

export default NotFound;