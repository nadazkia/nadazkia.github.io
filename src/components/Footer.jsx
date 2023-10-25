import Sosmed from "./Sosmed"
import { motion } from "framer-motion";
import { Link } from "react-router-dom"
import { Links } from "./IsiNavbar";
import DataBlog from "../pages/Blogs/config/db";

export default function Footer() {

    const zoomIn = {
        awal: { opacity: 0.8, scale: 0.8 },
        akhir: {
            opacity: 1, scale: 1, transition: {
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
        <footer className="pt-24 pb-20 bg-slate-800">
            <div className="container">
                <div className="flex flex-wrap mx-auto">
                    <div className="w-full self-center px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                        <motion.div variants={zoomIn} initial="awal"
                            whileInView="akhir"
                            transition={{ duration: 0.5 }}>
                            <h2 className="font-[Poppins] font-bold text-4xl text-white mb-5">Nadazkia</h2>
                            <h3 className="font-bold text-2xl mb-1">Hubungi Kami</h3>
                            {/* <p className="">nadazkia18@gmail.com</p> */}
                            <p className="">
                                <Link> <span className="font-semibold hover:text-primary "> Jaani House</span></Link> <br />
                                Jl. Jatipadang Raya No.12 <br />
                                Jakarta Selatan<br />
                            </p>
                        </motion.div>
                    </div>

                    <div id="tulisan" className="w-full px-4 mb-12 md:w-1/3 mt-4">
                        <motion.div variants={zoomIn} initial="awal" whileInView="akhir">
                            <h3 className="font-semibold text-xl text-white mb-5">
                                Kategori Tulisan
                            </h3>
                            <ul className="text-slate-300">
                                {DataBlog.map((data) => (
                                    <li key={data.id}>
                                        <Link
                                            to={`/blogs/${data.id}`}
                                            className="inline-block text-base hover:text-primary"
                                        >
                                            {data.judul}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <div className="w-full px-4 mb-12 md:w-1/3 mt-4">
                        <motion.div variants={zoomIn} initial="awal" whileInView="akhir">
                            <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
                            <ul className="text-slate-300">
                                {Links.map((Nav) => (
                                    <li key={Nav.name}>
                                        <Link
                                            to={Nav.link}
                                            className="inline-block text-base hover:text-primary cursor-pointer"
                                        >
                                            {Nav.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Copyright */}
                <motion.div variants={zoomIn} initial={{ scale: 0 }} whileInView="akhir">
                    <div className="w-full pt-10 border-t border-slate-600">
                        <motion.div variants={fadeUp} initial="awal" whileInView="akhir">
                            <div className="flex items-center justify-center mb-5">
                                <Sosmed />
                            </div>
                            <p className="font-medium text-xs text-slate-500 text-center">
                                Dibuat dengan ❤ oleh <span> </span>
                                <Link
                                    to="https://instagram.com/nadazkia"
                                    className=" font-bold hover:opacity-90 text-primary"
                                >
                                    Nada Fatiyyah Azkia <span> </span>
                                </Link>
                                menggunakan
                                <Link
                                    to="https://tailwindcss.com"
                                    className=" font-bold hover:opacity-90 text-sky-500"
                                >
                                    Tailwind CSS <span> </span>
                                </Link>
                                dan <span> </span>
                                <Link
                                    to="https://react.dev"
                                    className=" font-bold hover:opacity-90 text-sky-500"
                                >
                                    ReactJS
                                </Link>
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
                {/* Copyright */}
            </div>
        </footer>
    )
}