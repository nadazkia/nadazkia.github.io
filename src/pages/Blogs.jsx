import { Outlet, Link } from "react-router-dom";
import Embun from "../img/blog/embun.jpg";
import Kapal from "../img/blog/kapal.png";

function Blogs() {
  return (
    <>
      <section id="blogs" className="pt-20 bg-slate-100">
        <div className="container xl:w-10/12 xl:mt-auto">
          <div className="w-full self-center px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2"> Blogs</h4>
              <h2 className="font-bold text-slate-800 text-3xl mb-4 sm:text-4xl lg:text-5xl"> Tulisan Terkini</h2>
              <p className="font-medium text-md text-pudar md:text-lg ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic cupiditate perspiciatis tempora quibusdam facere!</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center ">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <Link>
                <img src={Embun} alt="Ukiran EMbun" className="w-full max-h-[300px] mx-auto hover:opacity-90" />
                </Link>
                <div className="py-8 px-6">
                  <Link to="#">
                  <h3 className="block mb-3 font-semibold text-xl text-slate-800 hover:text-primary truncate transition duration-200 ease-in">Sejarah</h3>
                  <p className="font-medium text-base text-pudar mb-6 line-clamp-2"> Ukiran Embun terbentuk tahun 2018 oleh seorang anak SMA yang tertarik pada tulisan. Ia mencoba untuk
                    mengungkapkan rasa melalui tulisan, hingga terbentuklah tagline "Embun yang mengukir rasa segenap
                    insan tuk menuai kebermanfaatan yang lebih luas".
                    <br/><br/>
                    Dalam mengungkapkan rasa, tak sedikit manusia yang lebih memilih menulis daripada berbicara. Merasa
                    lebih nyaman berbicara pada dirinya sendiri daripada berbicara dengan orang lain. Bertemu dengan
                    aneka ragam karakteristik manusia, membuatnya semakin bingung. Siapakah manusia yang bisa
                    dipercaya?. Sampai akhirnya, tulisan menjadi sahabat yang paling dipercaya ketika ingin bercerita.
                    Berharap ada manfaat dari rasa yang terungkap pada sebuah tulisan. Berharap ada doa-doa baik yang
                    terpanjat untuk kebahagiaan dunia dan akhirat.
                    <br/><br/>
                    Semoga bermanfaat.</p>
                  <span className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">
                  Baca Selengkapnya
                  </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <Link>
                <img src={Kapal} alt="Ukiran Embun" className="w-full mx-auto hover:opacity-90" />
                </Link>
                <div className="py-8 px-6">
                  <Link to="#">
                  <h3 className="block mb-3 font-semibold text-xl text-slate-800 hover:text-primary truncate transition duration-200 ease-in">Berlayar yang Jauh</h3>
                  <p className="font-medium text-base text-pudar mb-6 line-clamp-2">                     Bismillahirrahmanirrahim
                    <br/> <br/>
                    Assalamu'alaikum warahmatullaahi wabarakaatuh.
                    <br/>
                    Bagaimana kabarmu hari ini? Semoga selalu dalam lindungan Allah SWT
                    <br/><br/>
                    Aku ingin bercerita sedikit tentang sebuah kapal kokoh.
                    Kapal yang selalu siap saat sang pemilik laut memerintah laut untuk mengujinya. Kapal yang dengan
                    kokohnya dapat menghadapi marahnya lautan hingga sampai ke tujuan. Kapal yang setiap sisinya
                    dilapisi dengan iman, setiap bagiannya dibangun dengan ketakwaan, setiap penerangannya berasal dari
                    cahaya Qur'an, dan setiap yang berada diatasnya adalah orang-orang yang berusaha menuju pada
                    perbaikan. Setiap ruangan di kapal ini pasti ada pembatas antara laki-laki dan perempuan.
                    <br/><br/>
                    Kapal ini selalu saja siap mengantar orang-orang yang ingin memperbaiki diri tak pernah sekalipun
                    menolak. Apakah ia lelah? Ya. Sangat lelah. Tapi ia tak pernah mengeluh karena ia yakin akan ada
                    keajaiban di setiap perjuangannya.

                    <br/><br/><br/>
                    Kapal ini dinamakan:
                    <br/>
                    <strong>SAFINATUL MUJAHID</strong>
                    <br/><br/>
                    Mulai dari sini perjuanganku yang akan aku rindukan suatu saat nanti.

                  </p>
                  <span className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">
                  Baca Selengkapnya
                  </span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default Blogs;
