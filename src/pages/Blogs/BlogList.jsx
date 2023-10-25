import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BlogList({ blogs }) {

  const zoomIn = {
    awal: { opacity: 0.8, scale: 0.5 },
    akhir: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7
      }
    },
  }

  return (
    <>
      <section className="flex flex-wrap justify-center">
        {blogs.map((data) => (
          <div key={data.id} className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <Link to={`/blogs/${data.id}`}>
              <motion.div variants={zoomIn} initial="awal" whileInView="akhir">
                <div
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.03] ease-in-out duration-700 hover:shadow-primary mb-4"
                >
                  <img
                    src={data.cover}
                    alt={data.altCover}
                    className="xl:h-[200px] lg:h-[300px] mx-auto overflow-hidden"
                  />

                  <div className="pt-2 px-6">
                    {/* <span className=" text-[10px] lg:text-[12px] py-1 px-2 capitalize bg-primary gradient text-white rounded-full">{data.category}</span> */}
                    <h3
                      className="block mb-2 mt-4 font-bold text-xl text-slate-800 truncate transition duration-200 ease-in"
                    >
                      {data.judul}
                    </h3>
                    <p className="font-[Poppins] font-medium text-base text-pudar mb-4 line-clamp-2">
                      {data.deskripsi}
                    </p>
                  </div>

                  <footer className="pb-8 px-6 flex flex-wrap items-center justify-between">
                    <div className="flex">
                      {/* <img src={fotoPenulis} alt={altFotoPenulis} width={60}/> */}
                      {/* <p className=" text-pudar text-base">Publish: {ditulisTanggal}</p> */}
                      {/* <div className="my-auto px-2">
                            <p className=" text-pudar text-base">Publish: {ditulisTanggal}</p>
                            <h6 className="font-semibold text-base">{penulis}</h6>
                        </div> */}
                    </div>
                    <div className="mr-5 text-3xl font-black text-slate-800 hover:text-primary duration-100 transition ease-in">
                      →
                    </div>
                  </footer>
                </div>
              </motion.div>
            </Link>
          </div>
        )
        )}
      </section>
    </>
  );
}


