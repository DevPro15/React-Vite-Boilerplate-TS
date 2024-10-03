/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MovingBorder } from "./MovingBorder";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

type Props = {
  text: string | JSX.Element;
  type?: "button" | "submit" | "reset";
  setStatus?: any;
  status?: string;
  classNames?: string;
  onClick?: any;
  loading?: boolean;
  StartIcon?: React.ReactNode;
  outlined?: boolean;
  disabled?: boolean;
  animate?: boolean;
  bigFont?: boolean;
  containerClassName?: string;
  tab?: boolean;
  clockwise?: boolean;
  duration?: number;
  ref?: any;
};

function Button({
  text,
  type,
  classNames,
  onClick,
  loading = false,
  StartIcon,
  outlined = false,
  disabled = false,
  bigFont,
  containerClassName,
  tab,
  clockwise = true,
  duration = 0.5,
  ref,
}: Props) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(event);
    }
  };

  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);
  return (
    <button
      className={`bg-transparent relative text-xl h-11 min-w-22 p-[1px] overflow-hidden ${containerClassName}`}
      style={{
        borderRadius: "8px",
      }}
      ref={ref}
      type={type || "button"}
      onClick={handleClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {loading && !containerClassName?.includes("md:hidden") && (
        <div
          className="absolute inset-0"
          style={{ borderRadius: `calc(8px * 0.96)` }}
        >
          <MovingBorder rx="30%" ry="30%">
            <div
              className={
                "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]"
              }
            />
          </MovingBorder>
        </div>
      )}
      <motion.div
        className={`w-full flex gap-2 ${
          disabled ? "cursor-not-allowed bg-[#C3E9F6]" : "cursor-pointer"
        } ${
          outlined
            ? "bg-white dark:bg-gray-900 border border-gray-900"
            : "bg-gray-700"
        } 
      rounded-lg items-center justify-center py-3 ${
        outlined
          ? "text-gray-900 dark:text-white"
          : "text-white dark:text-gray-900"
      }
      font-medium relative outline-none py-0 md:py-2 px-8 h-9 md:h-10 text-xs md:text-base ${classNames}`}
        style={{ borderRadius: "calc(8px * 0.96)" }}
      >
        <div className="flex flex-row z-10 text-center justify-center items-center w-full gap-2">
          {StartIcon && <div>{StartIcon}</div>}
          <div className={` text-xs md:text-normal  ${bigFont && "text-base"}`}>
            {text}
          </div>
        </div>
        {outlined && !tab && (
          <>
            <motion.div
              className="absolute inset-0 z-0 rounded-[inherit]"
              style={{
                filter: "blur(5px)",
                position: "absolute",
                width: "calc(100% + 5px)",
                height: "calc(100% + 5px)",
              }}
              initial={{ background: movingMap[direction] }}
              animate={{
                background: hovered
                  ? [movingMap[direction], highlight]
                  : movingMap[direction],
              }}
              transition={{ ease: "linear", duration: duration ?? 1 }}
            />
            <div className="bg-white text-black absolute z-1 flex-none inset-[0px] rounded-[inherit] dark:bg-gray-900 dark:text-white" />
            <div className="absolute inset-x-0 -bottom-[2px]  h-px bg-gradient-to-r w-full mx-auto from-transparent via-gray-800 to-transparent" />
          </>
        )}
      </motion.div>
    </button>
  );
}

export default Button;
