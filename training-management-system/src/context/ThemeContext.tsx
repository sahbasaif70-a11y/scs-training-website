import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeColor = "orange" | "blue" | "green";

interface ThemeContextType {
  theme: ThemeColor;
  setTheme: (theme: ThemeColor) => void;
  themeConfig: {
    primaryHex: string;
    bgClass: string;
    textClass: string;
    hoverBgClass: string;
    borderClass: string;
  };
}

const themeConfigs: Record<ThemeColor, ThemeContextType["themeConfig"]> = {
  orange: {
    primaryHex: "#f97316",
    bgClass: "bg-orange-500",
    textClass: "text-orange-500",
    hoverBgClass: "hover:bg-orange-600",
    borderClass: "border-orange-500",
  },
  blue: {
    primaryHex: "#12327f",
    bgClass: "bg-[#12327f]",
    textClass: "text-[#12327f]",
    hoverBgClass: "hover:bg-[#21276d]",
    borderClass: "border-[#2C348F]",
  },
  green: {
    primaryHex: "#13A851",
    bgClass: "bg-emerald-600",
    textClass: "text-emerald-600",
    hoverBgClass: "hover:bg-emerald-800",
    borderClass: "border-emerald-600",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<ThemeColor>(() => {
    const savedTheme = localStorage.getItem("scs_website_theme") as ThemeColor;
    return savedTheme && ["orange", "blue", "green"].includes(savedTheme)
      ? savedTheme
      : "orange";
  });

  const setTheme = (newTheme: ThemeColor) => {
    setThemeState(newTheme);
    localStorage.setItem("scs_website_theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        themeConfig: themeConfigs[theme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
