const Pagination = () => {
    return (
        <div className="p-4 flex items-center justify-between text-gray-500">
            <button
                // disabled={!hasPrev}
                className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                // onClick={() => {
                //   changePage(page - 1);
                // }}
            >
                prev
            </button>
            <div className="flex items-center gap-2 text-sm">
                <button 
                    // key={pageIndex}
                    // className={`px-2 rounded-sm ${
                    //     page === pageIndex ? "bg-lamaSky" : ""
                    // }`}
                    className="px-2 rounded-sm bg-lamaSky"
                    // onClick={() => {
                    //     changePage(pageIndex);
                    // }}
                >
                    {/* {pageIndex} */}
                    1
                </button>
                <button 
                    // key={pageIndex}
                    // className={`px-2 rounded-sm ${
                    //     page === pageIndex ? "bg-lamaSky" : ""
                    // }`}
                    className="px-2 rounded-sm"
                    // onClick={() => {
                    //     changePage(pageIndex);
                    // }}
                >
                    {/* {pageIndex} */}
                    2
                </button>
                <button 
                    // key={pageIndex}
                    // className={`px-2 rounded-sm ${
                    //     page === pageIndex ? "bg-lamaSky" : ""
                    // }`}
                    className="px-2 rounded-sm"
                    // onClick={() => {
                    //     changePage(pageIndex);
                    // }}
                >
                    {/* {pageIndex} */}
                    3
                </button>
                ...
                <button 
                    // key={pageIndex}
                    // className={`px-2 rounded-sm ${
                    //     page === pageIndex ? "bg-lamaSky" : ""
                    // }`}
                    className="px-2 rounded-sm"
                    // onClick={() => {
                    //     changePage(pageIndex);
                    // }}
                >
                    {/* {pageIndex} */}
                    10
                </button>
            </div>
            <button
                // disabled={!hasNext}
                className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                // onClick={() => {
                //     changePage(page + 1);
                // }}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination;