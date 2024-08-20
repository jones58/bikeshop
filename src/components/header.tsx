export default function Header() {
  return (
    <header>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className=" text-3xl py-10">Cycles For Two</h1>
      </div>
      <div className="bg-neutral-800 h-20 w-full text-neutral-50 flex justify-start space-x-10 p-10 items-center text-2xl">
        <a href="#" className="hover:text-neutral-300">
          Bikes
        </a>
        <a href="#" className="hover:text-neutral-300">
          Racks
        </a>
        <a href="#" className="hover:text-neutral-300">
          Packs
        </a>
        <a
          href="https://jackkershaw.net/contact"
          target="_blank"
          rel="noreferrer"
          className="hover:text-neutral-300"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
