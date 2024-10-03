import { Input } from "./UI/Input";

const Footer = () => {
  return (
    <section className="py-10 bg-white text-black dark:bg-gray-800 dark:!text-white sm:pt-16 lg:pt-24 relative">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <h1 className="text-2xl font-bold">ANIME-UI</h1>

            <p className="text-base leading-relaxed mt-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Company
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Works
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Help
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Customer Support
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Delivery Details
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to newsletter
            </p>

            <form action="#" method="POST" className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input type="email" placeholder="Enter your email" />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center">
          © Copyright 2021, All Rights Reserved by Postcraft
        </p>
      </div>
    </section>
  );
};

export default Footer;
