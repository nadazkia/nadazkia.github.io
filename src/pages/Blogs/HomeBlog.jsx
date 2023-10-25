import { useState } from "react";
import { motion } from "framer-motion";
// import SearchBar from "../../components/SearchBar";
import BlogList from "./BlogList";
import DataBlog from "./config/db";
import Header from "../../components/Header";

function HomeBlog() {
  const [blogs] = useState(DataBlog)

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
      <section id="homeblog" className="pt-32 pb-28">
        <div className="container xl:w-10/12 xl:mt-auto">
          <div className="w-full self-center px-4">
            {/* Header Start */}
            <div className="w-full self-center px-4">
              <motion.div variants={zoomIn} initial="awal" whileInView="akhir">
                <Header judul="Blogs" subjudul="Tulisan Terkini" textColorSub="text-slate-800" deskripsi="Serpihan kisah yang berlum pernah diceritakan sebelumnya" />
              </motion.div>
            </div>
            {/* Header End */}

            {/* <SearchBar /> */}

            {/* Blog List Start */}
            <section className="flex flex-wrap justify-center">
              <BlogList blogs={blogs} />
            </section>
            {/* Blog List End */}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeBlog;
