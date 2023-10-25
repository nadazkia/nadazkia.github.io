export default function Header({ judul, subjudul, deskripsi }) {
    return (
        <div id="Header" className="max-w-2xl mx-auto text-center mb-16">
            <h4 className="uppercase font-[Poppins] font-semibold text-lg text-primary mb-2">
                {judul}
            </h4>
            <h2 className="font-bold text-slate-800 text-3xl mb-4 sm:text-4xl lg:text-5xl">
                {subjudul}
            </h2>
            <p className="font-medium text-md text-pudar md:text-lg ">
                {deskripsi}
            </p>
        </div>
    )
}