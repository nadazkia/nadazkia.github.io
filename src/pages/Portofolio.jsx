import { Outlet } from "react-router-dom";

function Portofolio() {
  return (
    <>
      <div className=" bg-amber-300 w-full h-screen">
        <h1 className="text-xl text-blue-900 mx-auto my-auto" > Portofolio </h1>
      </div>
    <Outlet />
    </>
  );
}

export default Portofolio;
