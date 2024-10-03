import { Link } from "react-router-dom";
import {
  FileIcon,
  FolderIcon,
  GraphIcon,
  LayoutIcon,
  PieIcon,
} from "../assets";
import Button from "./UI/Button";

const Hero = () => {
  return (
    <section className="py-6 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Make every step easier
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 lg:mt-4 font-pj">
            Download the boilerplate and start building your project today.
          </p>
          <div className="flex justify-center mt-8 sm:mt-0 relative sm:fixed sm:right-10 sm:top-9">
            <Button>
              <Link
                to="https://github.com/DevPro15/React-Vite-Boilerplate-TS"
                rel="noreferrer"
                target={"_blank"}
                className="inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-gray-500 hover:text-white focus:text-white focus:bg-gray-500 font-semibold text-white bg-black rounded-full"
                role="button"
              >
                Github
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-10">
          <div className="md:p-8 lg:p-5">
            <FolderIcon />
            <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">
              Folder Structure
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Our Vite + TypeScript boilerplate is cleanly structured, with
              dedicated directories for components, utilities, and assets. Each
              feature is modular, ensuring easy navigation and scalability.
            </p>
          </div>

          <div className="md:p-8 lg:p-10 md:border-l md:border-gray-200">
            <GraphIcon />
            <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">
              Protected Routes
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Ensure only authenticated users can access certain pages,
              enhancing security and user experience by redirecting unauthorized
              users to login.
            </p>
          </div>

          <div className="md:p-8 lg:p-10 md:border-l md:border-gray-200">
            <LayoutIcon />
            <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">
              Layout
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Organizes the page structure, ensuring consistent design and easy
              navigation across different views while keeping shared elements
              like headers and footers in place.
            </p>
          </div>

          <div className="md:p-8 lg:p-10 md:border-t md:border-gray-200">
            <FileIcon />
            <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">
              Hooks
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Custom hooks encapsulate reusable logic, making the code more
              modular and easier to maintain by separating concerns and avoiding
              repetition across components.
            </p>
          </div>

          <div className="md:p-8 lg:p-10 md:border-l md:border-gray-200 md:border-t">
            <FolderIcon />
            <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">
              Store
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </div>

          <div className="md:p-8 lg:p-10 md:border-l md:border-gray-200 md:border-t">
            <PieIcon />
            <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">
              Svgr
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              SVGR transforms SVGs into React components, allowing for easy
              manipulation and integration within the application while
              maintaining scalability and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
