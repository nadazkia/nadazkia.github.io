import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Contact() {
  const [nama, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [pesan, setPesan] = useState('')
  const [auth, setAuth] = useState(localStorage.key(`${nama}`));

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(nama, email, pesan)
    setNama('')
    setEmail('')
    setPesan('')
    // WITH APP SCRIPT IN GSHEET
    const formFile = document.querySelector("form")
    const formData = new FormData(formFile)
    const url = "https://script.google.com/macros/s/AKfycbwt4pTurt7qfcc3R1SRlK7-YDUPOFUWHGB2vIFpfpdS2DOTdcqFQHFxBjR7hSoRpL5_xw/exec"
    fetch(url, {
      method: "POST",
      // mode: "cors",
      credentials: 'include',
      body: formData
    })
      .then(res => {
        res.json()
      })
      .then(data => {
        console.log(data)
      })
      .catch(err => { console.log(err) })

    localStorage.setItem(`${nama}`, "Pesan Terkirim")
    setAuth(true)
    // ISI APP SCRIPT
    // const sheets = SpreadsheetApp.openByUrl("Link gsheet")
    // const sheetName = sheets.getSheetByName("Nama Sheet")
    // function doPost(e){
    //   let data = e.parameter
    //   sheetName.appendRow([data.nama, data.email, data.pesan])
    //   return ContentService.createTextOutput('Success')
    // }

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

  return (
    <>
      {/* Contact Start */}
      <section id="contact" className="pt-32 pb-28 bg-slate-100">
        {auth ? <div className="flex flex-col justify-center text-center">
          <Header judul="Contact" subjudul="Pesan Terkirim" deskripsi="Pesan sudah terkirim ke nadazkia. Apakah ingin mengirim ulang?" />
          <Link onClick={(e) => ulang(e)} className="text-white text-lg bg-red-500 rounded self-center px-3 py-2 font-semibold hover:opacity-90 ease-in-out duration-500 hover:scale-105">
            Kirim ulang pesan
          </Link>
        </div>
          :
          <div className="container xl:w-10/12 xl:mt-auto">
            <div className="w-full self-center px-4">
              <Header judul="Contact" subjudul="Hubungi Saya" deskripsi="Komunikasi adalah salah satu cara untuk menjaga hubungan" />
              {/* <div className="self-center text-center">
              <p className="font-bold text-lg text-red-500 md:text-xl ">
                ‼ MAINTENANCE ‼ <br /> --- Untuk sementara, kami dapat dihubungi
                melalui ---
                <Link to="https://instagram.com/nadazkia">
                  <span className="hover:text-primary transition duration-200 ease-in">
                    <br />
                    👉 Instagram 👈
                  </span>
                </Link>
              </p>
            </div> */}
            </div>
            <form
              // action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSefSuWxSDQLzBp-Des1O4-n3jxDyRjxrJpQULVIKugNDBS01g/formResponse"
              // method="post"
              // onSubmit={handleSubmit}
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="w-full lg:w-2/3 lg:mx-auto">
                <div className="w-full px-4 mb-8">
                  <label
                    htmlFor="name"
                    className="text-base text-primary font-bold"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    // name="entry.1299449051"
                    name="Nama"
                    value={nama}
                    placeholder="Ketik nama Lengkap disini"
                    required
                    className="w-full bg-slate-200 text-slate-800 p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                    onChange={(e) => setNama(e.target.value)}
                  />
                </div>
                <div className="w-full px-4 mb-8">
                  <label
                    htmlFor="email"
                    className="text-base text-primary font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Ketik email dan pastikan dengan benar ya"
                    id="email"
                    // name="entry.1036221706"
                    name="Email"
                    value={email}
                    required
                    className="w-full bg-slate-200 text-slate-800 p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                    onChange={(e) => setEmail(e.target.value)}

                  />
                </div>
                <div className="w-full px-4 mb-8">
                  <label
                    htmlFor="message"
                    className="text-base text-primary font-bold"
                  >
                    Pesan
                  </label>
                  <textarea
                    type="text"
                    placeholder="Pesan apa yang ingin disampaikan?"
                    id="message"
                    // name="entry.797991374"
                    name="Pesan"
                    value={pesan}
                    required
                    className="w-full bg-slate-200 text-slate-800 p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
                    onChange={(e) => setPesan(e.target.value)}

                  ></textarea>
                </div>
                <div className="w-full px-4 mb-8">
                  <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                    Kirim
                  </button>
                </div>
              </div>
            </form>
          </div>
        }
      </section>
      {/* Contact End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
      <Outlet />
    </>
  );


}

export default Contact;


// https://docs.google.com/forms/d/e/1FAIpQLSefSuWxSDQLzBp-Des1O4-n3jxDyRjxrJpQULVIKugNDBS01g/viewform?usp=pp_url&entry.1299449051=Nama+Lengkap&entry.1036221706=Email@gmail.com&entry.797991374=Pesan
