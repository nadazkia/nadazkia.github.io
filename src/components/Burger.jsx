function Burger() {
    return (
        <>
            <div className="flex relative cursor-pointer w-8 h-8 mx-auto ml-3 justify-center items-center shadow-sm overflow-hidden rounded-md transition-transform border-2">
                <div id="menu" className="">
                    <span className="top-[0.5rem] burger-line"></span>
                    <span className="top-[0.8rem] burger-line"></span>
                    <span className="top-[1.1rem] burger-line"></span>
                </div>
            </div>
        </>
    );
}

export default Burger;