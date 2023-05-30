import { Outlet } from "react-router-dom";

function Beranda() {
  return (
    <>
      <div className="bg-red-900 w-full h-screen">
        <h1 className="text-xl text-stone-50 block pt-28 px-8 py-6"> Beranda </h1>
      </div>
    <Outlet />
    </>

  );
}

export default Beranda