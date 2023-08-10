import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import BlogList from "./BlogList";
import DataBlog from "./config/db";
import Header from "../../components/Header";

function HomeBlog() {
  const [blogs] = useState(DataBlog)

  return (
    <section id="homeblog" className="pt-32 pb-28">
      <div className="container xl:w-10/12 xl:mt-auto">
        <div className="w-full self-center px-4">
          {/* Header Start */}
          <Header judul="Blogs" subjudul="Tulisan Terkini" deskripsi="Serpihan kisah yang berlum pernah diceritakan sebelumnya" />
          {/* Header End */}

          <SearchBar />

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
