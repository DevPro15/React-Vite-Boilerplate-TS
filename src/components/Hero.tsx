import { Link } from "react-router-dom";
import {
  FileIcon,
  FolderIcon,
  GraphIcon,
  HuskyLogoIcon,
  LayoutIcon,
  PieIcon,
} from "../assets";
import Button from "./UI/Button";

const features = [
  {
    icon: <FolderIcon />,
    title: "Folder Structure",
    description:
      "Our Vite + TypeScript boilerplate is cleanly structured, with dedicated directories for components, utilities, and assets. Each feature is modular, ensuring easy navigation and scalability.",
  },
  {
    icon: <GraphIcon />,
    title: "Protected Routes",
    description:
      "Ensure only authenticated users can access certain pages, enhancing security and user experience by redirecting unauthorized users to login.",
  },
  {
    icon: <LayoutIcon />,
    title: "Layout",
    description:
      "Organizes the page structure, ensuring consistent design and easy navigation across different views while keeping shared elements like headers and footers in place.",
  },
  {
    icon: <FileIcon />,
    title: "Hooks",
    description:
      "Custom hooks encapsulate reusable logic, making the code more modular and easier to maintain by separating concerns and avoiding repetition across components.",
  },
  {
    icon: (
      <img
        src={HuskyLogoIcon}
        alt="husky"
        width={47}
        height={47}
        className="mt-8"
      />
    ),
    title: "Husky",
    description:
      "Husky ensures code quality by managing pre-commit and pre-push Git hooks, automating tasks like linting and testing to maintain consistency and prevent errors before changes are committed.",
  },
  {
    icon: <PieIcon />,
    title: "Svgr",
    description:
      "SVGR transforms SVGs into React components, allowing for easy manipulation and integration within the application while maintaining scalability and performance.",
  },
];

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

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-[30px] mb-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`md:p-8 lg:p-[27px] flex flex-col justify-center items-center ${
                index > 0 && index % 3 !== 0
                  ? "md:border-l md:border-gray-200"
                  : ""
              } ${index >= 3 ? "md:border-t md:border-gray-200" : ""}`}
            >
              {feature.icon}
              <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">
                {feature.title}
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
