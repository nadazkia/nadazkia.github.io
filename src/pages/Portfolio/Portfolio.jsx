import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";
import DataPortofolio from "./config/db";
import Header from "../../components/Header";



function Portfolio() {

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

  const fadeUp = {
    awal: { opacity: 0.5, transform: "translateyY(80px)" },
    akhir: {
      opacity: 1, transform: "translateY(0px)", transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        ease: "easeOut",
        delay: 0.1
      }
    },
  }

  return (
    <>
      <section id="portfolio" className="pt-32 pb-28 bg-slate-100">
        <div className="container xl:w-10/12 xl:mt-auto">
          <div className="w-full self-center px-4">
            <motion.div variants={zoomIn} initial="awal" whileInView="akhir">
              <Header judul="Portfolio" subjudul="Project Terbaru" deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit tempora maiores possimus quos qui, id neque
                consectetur amet nostrum quis." />
            </motion.div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center ">
            {DataPortofolio.map((data) => {
              return (
                <div key={data.id} className="mb-12 p-4 md:w-1/2">
                  <motion.div variants={zoomIn} initial="awal" whileInView="akhir">                    <div className="rounded-md shadow-md overflow-hidden">
                    <img
                      src={data.cover}
                      alt={data.altCover}
                      width="w-full"
                    />
                  </div>
                    <h3 className="font-semibold text-xl text-slate-800 mt-5 mb-3">
                      {data.judul}
                    </h3>
                    <p className="font-[Poppins] font-medium text-base text-pudar">
                      {data.deskripsi}
                    </p>
                  </motion.div>
                </div>
              )
            })}

          </div>
        </div>
      </section>

      {/* Clients Start */}
      <section id="clients" className="pt-36 pb-32 bg-slate-700">
        <div className="container">
          <div className="w-full self-center px-4">
            <div className="mx-auto text-center mb-16">
              <motion.div variants={zoomIn} initial="awal" whileInView="akhir">
                <h4 className="uppercase font-semibold text-lg text-primary mb-2">
                  Clients
                </h4>
                <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
                  Yang Pernah Bekerjasama
                </h2>
                <p className="font-medium text-md text-pudar md:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                  expedita excepturi vitae.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <motion.div variants={fadeUp} initial="awal" whileInView="akhir"
                className="w-full max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:opacity-100 hover:grayscale-0">
                <Link
                  to="https://instagram.com/nads.dev"
                >
                  <img
                    src="img/clients/nadsvg.svg"
                    alt="Nads.dev"
                  />
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} initial="awal" whileInView="akhir"
                className="w-full max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:opacity-100 hover:grayscale-0">
                <Link
                  to="https://instagram.com/nads.dev"
                >
                  <img src="img/clients/dapoernenekpng.png" alt="Dapoer Nenek" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Clients End */}
      <Outlet />
    </>
  );
}

export default Portfolio;
