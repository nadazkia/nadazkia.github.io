import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import BlogList from "./BlogList";
import DataBlog from "./config/db";

function HomeBlog() {
  const [blogs, setBlogs] = useState(DataBlog)

  return (
    <section id="homeblog" className="pt-32 pb-28">
      <div className="container xl:w-10/12 xl:mt-auto">
        <div className="w-full self-center px-4">
          {/* Header Start */}
          <div id="Header" className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-[Poppins] font-semibold text-lg text-primary mb-2">Blogs
            </h4>
            <h2 className="font-bold text-slate-800 text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Tulisan Terkini
            </h2>
            <p className="font-medium text-md text-pudar md:text-lg ">
              Serpihan kisah yang berlum pernah diceritakan sebelumnya
            </p>
          </div>
          {/* Header End */}

          {/* Search Bar Start */}
          <SearchBar />
          {/* Search Bar End */}

          {/* Blog List Start */}
          <section className="flex flex-wrap justify-center ">
            <BlogList blogs={blogs} />
          </section>
          {/* Blog List End */}
        </div>
      </div>
    </section>
  );
}

export default HomeBlog;
