// Header.tsx
import { useEffect, useState } from "react";
import { LuSun } from "react-icons/lu";
import { GoMoon } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const ThemeButton = () => {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="theme-switch"
        className="sr-only"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <label
        htmlFor="theme-switch"
        className="relative flex items-center cursor-pointer p-2"
      >
        {/* AnimatePresence handles the presence of the icons when switching */}
        <AnimatePresence mode="wait">
          {theme === "dark" ? (
            <motion.div
              key="sun-icon"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <LuSun className="text-yellow-400 w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="moon-icon"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <GoMoon className="text-gray-600 w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="sr-only">
          Switch to {theme === "dark" ? "light" : "dark"} mode
        </span>
      </label>
    </div>
  );
};

export default ThemeButton;
