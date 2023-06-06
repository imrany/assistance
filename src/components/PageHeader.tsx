import { PageHeaderType } from "../types/types";

// @flow strict
type Props = {
    val:PageHeaderType
};

function PageHeader(prop: Props) {
    return (
        <div className="fixed top-0 right-0 left-0 bg-white shadow-md">
            <div className="flex justify-between pt-6 px-20 max-md:px-10">
                <i className="ri-arrow-left-line ri-lg"></i>
                <p className="text-2xl font-semibold">{prop.val.title}</p>
            </div>
        </div>
    );
};

export default PageHeader;