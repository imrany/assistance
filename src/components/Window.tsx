// @flow strict
import { Data } from "../types/types";
type Props={
    data:{
        req:string,
        res:string
    }
}
function Window(prop:Props) {
    return (
        <div className="px-6 py-8 my-14 md:w-[80vw]" id="window">
                <div className="mb-20">
                    <div className="bg-gray-300 px-4 py-2 rounded-[20px] w-fit h-fit float-right -mt-12">
                        <p className='text-base max-sm:text-sm text-center'>{prop.data.req}</p>
                    </div>

                    <div className="border-[1px] px-4 py-2 rounded-[20px] w-fit h-fit">
                        <p className='text-base max-sm:text-sm text-center'>{prop.data.res}</p>
                    </div>
                </div>
        </div>
    );
};

export default Window;