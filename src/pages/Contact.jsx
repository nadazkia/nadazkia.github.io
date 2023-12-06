import React, { useState } from "react";
import { motion } from "framer-motion";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Contact() {
  const [nama, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [pesan, setPesan] = useState('')
  const [auth, setAuth] = useState(localStorage.key(`${nama}`));

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    setNama('')
    setEmail('')
    setPesan('')
    navigate("/contact")

    localStorage.setItem(`${nama}`, "Pesan Terkirim")
    setAuth(true)

    // UNTUK APP SCRIPT
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyngL-atrBPCVb9CNa7i_NWq_Eu7HgaKak2jFiVzK0gUoSnW_clwHjkGXt0NNoeFXWT/exec'
    const form = document.forms['contactform']
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => console.log('Success!'))
      .catch(error => console.error('Error!', error.message))
    // ------------------------------

    // WITH AXIOS AND sheet.best
    // const data = {nama, email,pesan}
    // axios.post("link dari sheet.best", data)
    // .then((res)=>{console.log(res)
    // setNama('')
    // setEmail('')
    // setPesan('')
    // })
  }

  const ulang = (e) => {
    e.preventDefault()
    localStorage.clear()
    setAuth(false)
  }

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
      {/* Contact Start */}
      <section id="contact" className="pt-32 pb-28 bg-slate-100">
        {auth ?
          <div className="flex flex-col justify-center text-center">
            <motion.div variants={zoomIn} initial="awal" whileInView="akhir">
              <Header judul="Contact" subjudul="Pesan Terkirim" deskripsi="Pesan sudah terkirim ke nadazkia. Apakah ingin mengirim ulang?" />
              <Link onClick={(e) => ulang(e)} className="text-white text-lg bg-red-500 rounded self-center px-3 py-2 font-semibold hover:opacity-90 ease-in-out duration-500 hover:scale-105">
                Kirim ulang pesan
              </Link>
            </motion.div>

          </div>
          :
          <div className="container xl:w-10/12 xl:mt-auto">
            <div className="w-full self-center px-4">
              <motion.div variants={zoomIn} initial="awal" whileInView="akhir">
                <Header judul="Contact" subjudul="Hubungi Saya" />
              </motion.div>
            </div>

            <motion.div variants={zoomIn} initial="awal" whileInView="akhir"  >
              <form name="contactform"
                onSubmit={(e) => handleSubmit(e)}>
                <div className="flex flex-col w-full lg:w-2/3 lg:mx-auto">
                  <div className="w-full px-4 mb-8">
                    <label className="text-base text-primary font-bold">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="nama"
                      name="nama"
                      value={nama}
                      placeholder="Ketik nama Lengkap disini"
                      required
                      className="mt-1 w-full bg-white text-slate-800 p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                      onChange={(e) => setNama(e.target.value)}
                    />
                  </div>
                  <div className="w-full px-4 mb-8">
                    <label
                      htmlFor="email"
                      className="text-base text-primary font-bold"
                    > Email
                    </label>
                    <input
                      type="email"
                      placeholder="Ketik email dan pastikan dengan benar ya"
                      id="email"
                      name="email"
                      value={email}
                      required
                      className="mt-1 w-full bg-white text-slate-800 p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                      onChange={(e) => setEmail(e.target.value)}

                    />
                  </div>
                  <div className="w-full px-4 mb-8">
                    <label
                      htmlFor="message"
                      className="text-base text-primary font-bold"
                    > Pesan
                    </label>
                    <textarea
                      type="text"
                      placeholder="Pesan apa yang ingin disampaikan?"
                      id="pesan"
                      name="pesan"
                      value={pesan}
                      required
                      className="mt-1 w-full bg-white text-slate-800 p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
                      onChange={(e) => setPesan(e.target.value)}

                    ></textarea>
                  </div>
                  <div className="w-full px-4 mb-8">
                    <button type="submit" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                      Kirim
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>

            {/* <motion.div variants={zoomIn} initial="awal" whileInView="akhir">
              <div id="form" className="overflow-hidden m-auto w-full text-center justify-center right-0">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSefSuWxSDQLzBp-Des1O4-n3jxDyRjxrJpQULVIKugNDBS01g/viewform?embedded=true" title="form" height="870" frameborder="0" marginheight="0" marginwidth="0" className="overflow-hidden w-full"
                  onSubmit={(e) => handleSubmit(e)}>Loading…</iframe>
              </div>
            </motion.div> */}
          </div>
        }
      </section>
      {/* Contact End */}

      {/* Footer Start */}
      <Footer />
      <Outlet />
      {/* Footer End */}
    </>
  );


}

export default Contact;


// https://docs.google.com/forms/d/e/1FAIpQLSefSuWxSDQLzBp-Des1O4-n3jxDyRjxrJpQULVIKugNDBS01g/viewform?usp=pp_url&entry.1299449051=Nama+Lengkap&entry.1036221706=Email@gmail.com&entry.797991374=Pesan
