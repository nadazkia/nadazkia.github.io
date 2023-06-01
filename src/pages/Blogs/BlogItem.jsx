import { Link } from "react-router-dom"
// import { blogList } from "./config/DataBlog"


// function BlogItem() {
//     return (
//         <>
//             <section className="flex flex-wrap justify-center pt-4">
//                 {blogList.map((isiBlog) => (
//                     <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
//                         <div isiBlog={isiBlog} key={isiBlog.id} className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">

//                             <Link>
//                                 <img src={isiBlog.cover} alt="Cover" className="w-full max-h-[300px] mx-auto hover:opacity-90" />
//                             </Link>


//                             <div className="pt-3 px-6">
//                                     <span className=" text-[10px] lg:text-[12px] py-1 px-2 capitalize bg-primary gradient text-white rounded-full">{isiBlog.category}</span>
//                                 <Link to="#">
//                                     <h3 className="block mb-3 mt-5 font-bold text-xl text-slate-800 hover:text-primary truncate transition duration-200 ease-in">{isiBlog.judul}</h3>
//                                     <p className="font-medium text-base text-pudar mb-6 line-clamp-2">{isiBlog.deskripsi}</p>
//                                 </Link>
//                             </div>
//                             <footer className="pb-8 px-6 flex flex-wrap items-center justify-between" >
//                                 <div className="flex">
//                                 <img src={isiBlog.fotoPenulis.Nads} alt="Foto Penulis" width={60}/>
//                                 <div className="my-auto px-2">
//                                     <h6 className="font-semibold text-base">{isiBlog.penulis}</h6>
//                                     <p className=" text-pudar text-base">{isiBlog.ditulisTanggal}</p>
//                                 </div>
//                                 </div>
//                                 <Link to={`/blog/${isiBlog.id}`} className="mr-5 font-extrabold">→</Link>
//                             </footer>
//                         </div>
//                     </div>
//                 ))}
//             </section>
//         </>
//     )
// }

function BlogItem({
    blog: {
        id,
        judul,
        // category,
        penulis,
        fotoPenulis,
        altFotoPenulis,
        ditulisTanggal,
        cover,
        altCover,
        deskripsi,
    }
}) {
    return (
        <>
            <div key={id} className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">

                <Link>
                    <img src={cover} alt={altCover} className="xl:h-[200px] mx-auto hover:opacity-90 overflow-hidden" />
                </Link>


                <div className="pt-2 px-6">
                    {/* <span className=" text-[10px] lg:text-[12px] py-1 px-2 capitalize bg-primary gradient text-white rounded-full">{category}</span> */}
                    <Link to={`/blog/${id}`}>
                        <h3 id={judul} className="block mb-2 mt-4 font-bold text-xl text-slate-800 hover:text-primary truncate transition duration-200 ease-in">{judul}</h3>
                        <p className="font-[Poppins] font-medium text-base text-pudar mb-6 line-clamp-2">{deskripsi}</p>
                    </Link>
                </div>


                <footer className="pb-8 px-6 flex flex-wrap items-center justify-between" >
                    <div className="flex">
                        {/* <img src={fotoPenulis} alt={altFotoPenulis} width={60}/> */}
                        <p className=" text-pudar text-base">Publish: {ditulisTanggal}</p>
                        {/* <div className="my-auto px-2">
                            <p className=" text-pudar text-base">Publish: {ditulisTanggal}</p>
                            <h6 className="font-semibold text-base">{penulis}</h6>
                        </div> */}
                    </div>
                    <Link to={`/blog/${id}`} className="mr-5 font-extrabold">→</Link>
                </footer>

            </div>
        </>
    )
}

export default BlogItem