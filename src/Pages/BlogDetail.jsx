

import { Link } from "react-router-dom"


function BlogDetail() {

    return (
        <>
            <div className="">
                <div className=" p-4 flex gap-5 bg-gray-100 ">
                    {/* image */}
                    <div className="w-2/5 bg-gray-400/10">
                        blog rsmi
                    </div>
                    <div className="w-3/5">
                        {/* name & star */}
                        <div className="flex items-center mb-5 bg-gray-400/10">
                            <h5 className="text-3xl font-bold mb-4">
                                blog başlığı
                            </h5>
                            <div className="ms-auto">
                                yıldızlar
                            </div>
                        </div>
                        {/* detail */}
                        <div className="w-full">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetail
