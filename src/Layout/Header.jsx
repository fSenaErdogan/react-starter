

const Header = () => {

    return (
        <div className='grid grid-cols-3 gap-3 p-2 px-4 bg-gray-200/40 rounded-b-lg border'>
            {/* sol üst icon alanları */}
            <div className='flex items-center gap-3'>
                <span className="p-1 px-3 bg-gray-300/50 rounded-lg">
                    sol
                </span>
                <span className="p-1 px-3 bg-gray-300/50 rounded-lg">
                    üst
                </span>
                <span className="p-1 px-3 bg-gray-300/50 rounded-lg">
                    icon
                </span>
                <span className="p-1 px-3 bg-gray-300/50 rounded-lg">
                    alanı
                </span>
            </div>
            {/* orta logo alanı */}
            <div className='mx-auto py-1'>
                Logo
            </div>
            {/* sağ üst icon alanları */}
            <div className='flex items-center gap-3 ms-auto' >
                <span className="p-1 px-3 bg-gray-300/50 rounded-lg">
                    sağ
                </span>
                <span className="p-1 px-3 bg-gray-300/50 rounded-lg">
                    üst
                </span>
                <span className="p-1 px-3 bg-gray-300/50 rounded-lg">
                    icon
                </span>
                <span className="p-1 px-3 bg-gray-300/50 rounded-lg">
                    alanı
                </span>
            </div>
        </div>
    )
}


export default Header