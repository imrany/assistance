// @flow strict
function Fallback() {
    return (
        <div className='flex flex-col h-[75vh] justify-center items-center'>
           <div className="border-[1px] px-3 py-3 rounded-[20px] max-md:w-[90vw]">
                <p className='text-base max-sm:text-sm text-center'>Check your internet connection and try again.</p>
           </div>
        </div>
    );
};

export default Fallback;