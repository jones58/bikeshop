export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full">
      <div className="bg-neutral-800 h-10 p-10 flex justify-between items-center text-md">
        <a
          href="https://github.com/jones58/bikeshop"
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-neutral-50 hover:text-neutral-300">
            View Code
          </p>
        </a>
        <p className="text-neutral-50 hover:text-neutral-300">
          No Copyright Misuse Intended - Site For Educational Purposes.
        </p>
      </div>
    </footer>
  );
}
