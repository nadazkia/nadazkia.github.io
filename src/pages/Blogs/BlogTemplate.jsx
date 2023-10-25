import { useParams, Outlet } from "react-router-dom";
import DataBlog from "./config/db";
import Footer from "../../components/Footer";

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
                    className="font-[Poppins] uppercase font-semibold text-4xl text-primary pb-5"
                  >
                    {data.judul}
                  </h4>
                </div>
                <div className="text-justify">
                  <p className="font-[Poppins] font-medium text-md text-gray-700 md:text-lg whitespace-pre-line">
                    {data.deskripsi}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center "></div>
        </div>
      </section>
      {/* Footer Start */}
      <Footer />
      <Outlet />
      {/* Footer End */}
    </>
  );
}

export default Blog;
