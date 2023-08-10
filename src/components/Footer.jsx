import Sosmed from "./Sosmed"
import { Link } from "react-router-dom"
import { Links } from "./IsiNavbar";
import DataBlog from "../pages/Blogs/config/db";

export default function Footer() {
    return (
        <footer className="pt-24 pb-20 bg-slate-800">
            <div className="container">
                <div className="flex flex-wrap mx-auto">
                    <div className="w-full self-center px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                        <h2 className="font-[Poppins] font-bold text-4xl text-white mb-5">Nadazkia</h2>
                        <h3 className="font-bold text-2xl mb-1">Hubungi Kami</h3>
                        {/* <p className="">nadazkia18@gmail.com</p> */}
                        <p className="">
                            <Link> <span className="font-semibold hover:text-primary "> Jaani House</span></Link> <br />
                            Jl. Jatipadang Raya No.12 <br />
                            Jakarta Selatan<br />
                        </p>
                    </div>

                    <div id="tulisan" className="w-full px-4 mb-12 md:w-1/3 mt-4">
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
                    </div>

                    <div className="w-full px-4 mb-12 md:w-1/3 mt-4">
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
                    </div>
                </div>

                {/* Copyright */}
                <div className="w-full pt-10 border-t border-slate-600">
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
                </div>
                {/* Copyright */}
            </div>
        </footer>
    )
}