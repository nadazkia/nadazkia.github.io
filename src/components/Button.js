function Button(props) {
  return (
    <button className="bg-indigo-600 text-white fotn-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-500">
      {props.children}
    </button>
  );
}

export default Button;
