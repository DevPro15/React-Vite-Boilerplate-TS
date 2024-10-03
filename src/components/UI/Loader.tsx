import { RotatingLines } from "react-loader-spinner";

type Props = {
  width?: number;
  className?: string;
};

const Loader = ({ width = 50, className = "" }: Props) => {
  return (
    <div
      id="preloader"
      className={`flex justify-center items-center ${className} absolute top-0 right-0 left-24 bottom-0`}
    >
      <RotatingLines
        visible={true}
        width={`${width}`}
        strokeWidth="3"
        animationDuration="0.75"
        strokeColor="#1B9FDA"
      />
    </div>
  );
};

export default Loader;
