import { useParams } from "react-router-dom";
import DataBlog from "./config/db";

function Blog() {
  const { id } = useParams();
  const blogs = DataBlog.filter((blog) => String(blog.id) === id)
  return (
    <>
      <section id="Blog" className="py-20 bg-slate-100 z-999 ">
        <div className="container xl:w-10/12 xl:mt-auto">
          <div className="w-full self-center px-4">
            {blogs.map((data) => (
              <div key={data.id}>
                <div
                  className="max-w-xl mx-auto text-center mt-16 mb-4"
                >
                  <h4
                    className="font-[Poppins] font-semibold text-4xl text-primary mb-2"
                  >
                    {data.judul}
                  </h4>
                </div>
                <div className="text-justify">
                  <text className="font-medium text-md text-pudar md:text-lg whitespace-pre-line align-bottom">
                    {data.deskripsi}
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
