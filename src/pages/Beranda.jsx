import React from "react";
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";
// import Portfolio from "./Portfolio/Portfolio";
// import Blogs from "./Blogs/HomeBlog";
// import Contact from "./Contact";
import Sosmed from "../components/Sosmed"


function Beranda() {

  const zoomIn = {
    awal: { opacity: 0.8, scale: 0.5 },
    akhir: {
      opacity: 1, scale: 1, transition: {
        duration: 0.7
      }
    },
  }

  const fadeRight = {
    awal: { opacity: 0.5, transform: "translateX(-300px)" },
    akhir: {
      opacity: 1, transform: "translateX(0px)", transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        ease: "easeOut",
        delay: 0.1
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
      {/* Hero Start */}
      <section id="hero" className="pt-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <motion.div variants={zoomIn} initial="awal"
                whileInView="akhir"
                transition={{ duration: 0.5 }}>
                <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">
                  Halo semua👋, saya
                  <span className="block font-bold text-4xl text-gray-800 my-2 lg:text-5xl font-[Poppins]">
                    Nada Fatiyyah Azkia
                  </span>
                </h1>
                <h2 className="font-medium text-pudar text-lg mb-5 lg:text-2xl">
                  Content Creator | Mathematics Teacher | Web Developer
                </h2>
                <p className="font-medium text-pudar mb-10 leading-r">
                  Apapun bisa kita pelajari. Pantang menyerah bukan pilihan kan?
                  <span className="font-bold"> jelas bukan!</span>
                </p>
              </motion.div>
              <motion.div variants={fadeRight} initial="awal"
                whileInView="akhir">
                <Link to="/contact">
                  <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                    Hubungi Saya
                  </button>
                </Link>
              </motion.div>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-0 lg:right-0">
                <motion.img
                  src="img/profile2.png"
                  alt="Nada Fatiyah Azkia"
                  // className="max-2-full mx-auto"
                  className="w-[330px] mx-auto"
                  variants={zoomIn} initial="awal"
                  whileInView="akhir"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <span className="absolute -bottom-20 -z-10 left-1/2 -translate-x-1/2 md:scale-120">
                  <motion.div initial={{ opacity: 0.5, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                    <svg
                      width={400}
                      height={560}
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#04acb4"
                        d="M56.8,-58.8C67.5,-46.2,65.7,-23.1,62.8,-3C59.8,17.1,55.6,34.2,44.9,50.6C34.2,66.9,17.1,82.5,0.6,81.8C-15.8,81.2,-31.7,64.3,-43.2,48C-54.7,31.7,-62,15.8,-60.7,1.3C-59.4,-13.2,-49.5,-26.4,-38,-39.1C-26.4,-51.8,-13.2,-63.9,4.9,-68.8C23.1,-73.7,46.2,-71.5,56.8,-58.8Z"
                        transform="translate(100 100) scale(1.2)"
                      />
                    </svg>
                  </motion.div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero End */}

      {/* Beranda Start */}
      <section id="beranda" className="pt-32">
        <div className="container pb-28">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2" >
              <motion.div variants={fadeRight} initial="awal"
                whileInView="akhir">
                <h4 className="font-bold uppercase text-primary text-lg mb-3">
                  Tentang Saya
                </h4>
                <h2 className="font-bold text-gray-800 text-3xl mb-5 max-w-md lg:text-4xl">
                  Yuk, bekerja sama!
                </h2>
                <p className="font-medium text-base text-pudar max-w-xl lg:text-lg">
                  Lulusan S1 Pendidikan Matematika UIN Syarif Hidayatullah Jakarta. Pernah bekerja sebagai guru matematika selama 6 bulan dan informatika selama 1 bulan. Aktif mengajar privat. Memiliki beberapa projek web app dengan Framework NextJS dan Laravel. Bertanggungjawab dan dapat diandalkan.  
                </p>
              </motion.div>
            </div>
            <div className="w-full px-4 lg:w-1/2 md:pt-3">
              <motion.div variants={fadeUp} initial="awal"
                whileInView="akhir">
                <h3 className="font-semibold text-gray-800 text-2xl mb-4 lg:w-3xl lg:pt-10">
                  Mari berteman
                </h3>
                <p className="font-medium text-base text-pudar mb-6 lg:text-lg">
                  Berikut akun media sosial saya
                </p>
                {/* Beranda End */}

                {/* Sosmed */}
                <div className="items-center">
                  <Sosmed />
                </div>
                {/* Sosmed End */}
              </motion.div>
            </div>
          </div>
        </div >
        {/* <Portfolio />
        <Blogs />
        <Contact /> */}
      </section >
      {/* About End */}
      < Outlet />
    </>
  );
}

export default Beranda;
