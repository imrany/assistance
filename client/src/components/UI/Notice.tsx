// @flow strict
import { Status } from "../../types/types";
type Props={
    notice:Status
}
function Notice(prop:Props) {
    return (
        <>
            {!prop.notice.value?(
                <div className="fixed top-0 right-0 left-0 h-fit bg-black">
                    <p className="text-center text-xs text-white"><i className="ri-cloud-off-line mr-2"></i> {prop.notice.text}</p>
                </div>
            ):null}
        </>
    );
};

export default Notice;