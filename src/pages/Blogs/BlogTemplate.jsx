// import { Link } from "react-router-dom";
import { blogList } from "./config/DataBlog";

function Blog() {
  return (
    <>
      <section id="Blog" className="py-20 bg-slate-100 z-999 ">
        <div className="container xl:w-10/12 xl:mt-auto">
          <div className="w-full self-center px-4">
            {blogList.map((isiBlog) => (
              <div>
                <div
                  key={isiBlog.id}
                  className="max-w-xl mx-auto text-center mt-16 mb-4"
                >
                  {/* <img
                    id={isiBlog.id}
                    src={isiBlog.cover}
                    alt={isiBlog.altCover}
                    className="w-full max-h-[300px] mx-auto hover:opacity-90"
                  /> */}
                  <h4
                    id={isiBlog.id}
                    className="font-[Poppins] font-semibold text-4xl text-primary mb-2"
                  >
                    {isiBlog.judul}
                  </h4>
                </div>
                <div className="text-justify">
                  <text className="font-medium text-md text-pudar md:text-lg">
                    {isiBlog.deskripsi}
                  </text>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center "></div>
        </div>
      </section>
    </>
  );
}

export default Blog;
