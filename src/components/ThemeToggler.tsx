import React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";

function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      <Switch
        checked={currentTheme === "dark"}
        onChange={() =>
          currentTheme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className={`${
          currentTheme === "dark" ? "bg-teal-500" : "bg-white"
        } relative inline-flex h-7 w-12 shadow-sm items-center rounded-full transition-colors focus:outline-none`}
      >
        <span className="sr-only">Theme setting</span>
        <span
          className={`${
            currentTheme === "dark"
              ? "translate-x-6 bg-white"
              : "translate-x-1 bg-gray-800"
          } inline-block h-5 z-10 w-5 transform rounded-full transition-transform`}
        />
        <div className="absolute flex w-full justify-evenly">
          <span className="block">🌞</span>
          <span className="block">🌛</span>
        </div>
      </Switch>
    </div>
  );
}

export default ThemeToggle;
