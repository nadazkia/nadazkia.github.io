import { Link } from "react-router-dom";
import { blogList } from "./config/DataBlog";

function BlogTemplate() {
  return (
    <>
      <section id="portfolio" className="pt-20 bg-slate-100">
        <div className="container xl:w-10/12 xl:mt-auto">
          <div className="w-full self-center px-4">
            {blogList.map((isiBlog) => (
              <div
                isiBlog={isiBlog}
                key={isiBlog.id}
                className="max-w-xl mx-auto text-center mb-16"
              >
                <Link>
                  <img
                    src={isiBlog.cover}
                    alt="Cover"
                    className="w-full max-h-[300px] mx-auto hover:opacity-90"
                  />
                </Link>
                <h4 className="font-[Poppins] font-semibold text-lg text-primary mb-2">
                  {isiBlog.judul}
                </h4>
                <p className="font-medium text-md text-pudar md:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit tempora maiores possimus quos qui, id neque
                  consectetur amet nostrum quis.
                </p>
              </div>
            ))}
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center "></div>
        </div>
      </section>
    </>
  );
}

export default BlogTemplate;
