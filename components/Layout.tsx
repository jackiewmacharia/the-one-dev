import classNames from "classnames";
import { useEffect } from "react";
import styles from "./Layout.module.css";

export function GradientBackground({
  variant,
  className,
}: {
  variant: string;
  className: string;
}) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === "large",
      [styles.colorBackgroundBottom]: variant === "small",
    },
    className
  );

  return <div className={classes} />;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const setAppTheme = () => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const darkMode = localStorage.getItem("theme") === "dark";
    const lightMode = localStorage.getItem("theme") === "light";

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else if (lightMode) {
      document.documentElement.classList.remove("dark");
    } else {
      if (!darkQuery.matches) {
        document.documentElement.classList.remove("dark");
      } else {
        // default to dark mode
        document.documentElement.classList.add("dark");
      }
    }
    return;
  };

  const handleSystemThemeChange = () => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    darkQuery.onchange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    };
  };

  useEffect(() => {
    setAppTheme();
  }, []);

  useEffect(() => {
    handleSystemThemeChange();
  }, []);

  return (
    <div className="relative pb-24 overflow-hidden">
      <div className="flex flex-col items-center max-w-2xl w-full mx-auto">
        {children}
      </div>
    </div>
  );
}
