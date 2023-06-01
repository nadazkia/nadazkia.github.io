function Button(props) {
  return (
    <button className="bg-primary text-white py-2 px-6 rounded md:ml-8 hover:opacity-80">
      {props.children}
    </button>
  );
}

export default Button;
