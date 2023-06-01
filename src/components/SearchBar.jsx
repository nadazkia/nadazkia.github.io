

function SearchBar({value, handleSearchKey, clearSearch, formSubmit}) {
    return(
        <div className=" bg-slate-200 w-fit mx-auto my-5 p-1 rounded">
            <form onSubmit={formSubmit} className="flex items-center pl-3">
                <input 
                type="text" 
                placeholder="Search by Category"
                className="bg-slate-200 rounded py-2 focus:outline-none"
                onChange={handleSearchKey} 
                value={value}/>
                {value && <span onClick={clearSearch} className="pr-4 cursor-pointer">X</span>}
                <button className="bg-primary text-white font-[Poppins] py-2 px-6 rounded hover:opacity-80">Go</button>
            </form>
        </div>
    );
}
export default SearchBar