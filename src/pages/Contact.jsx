import { Outlet } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="bg-emerald-400 w-full h-screen">
        <h1 className="text-xl text-blue-900 mx-auto my-auto" > Contact </h1>
      </div>
    <Outlet />
    </>
  );
}

export default Contact;
