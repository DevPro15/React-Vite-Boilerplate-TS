import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-[#FCF8F1] bg-opacity-30">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0 font-bold text-2xl">
            Vite Boilerplate + TS + Tailwind
          </div>

          <Link
            to="#"
            title=""
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-gray-500 hover:text-white focus:text-white focus:bg-gray-500 font-semibold text-white bg-black rounded-full"
            role="button"
          >
            Github
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
