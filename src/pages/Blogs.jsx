import { Outlet } from "react-router-dom";

function Blogs() {
  return (
    <>
      <div className="bg-black w-full h-screen">
        <h1 className="text-xl text-stone-50 block pt-28 px-8 py-6" > Blogs </h1>
      </div>
    <Outlet />
    </>
  );
}

export default Blogs;
