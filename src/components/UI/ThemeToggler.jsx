import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as MoonSVG } from "../../assets/svg/moon.svg";
import { ReactComponent as SunSVG } from "../../assets/svg/sun.svg";


const ThemeToggler = (props) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.style.setProperty("--gray", "#f3f4f6");
      document.documentElement.style.setProperty("--gray-light", "#dfdfdf");
      document.documentElement.style.setProperty("--gray-transparent", "#f3f4f685");
      document.documentElement.style.setProperty("--gray-decor", "#e6e6e6");
      document.documentElement.style.setProperty("--dark", "#ffffff");
      document.documentElement.style.setProperty("--text-white", "#000000");
      document.documentElement.style.setProperty("--text-gray", "#6b7280");
    } else {
      setTheme("dark");
      document.documentElement.style.setProperty("--gray", "#1e1e1e");
      document.documentElement.style.setProperty("--gray-light", "#393939");
      document.documentElement.style.setProperty("--gray-transparent", "#1e1e1e92");
      document.documentElement.style.setProperty("--gray-decor", "#272828");
      document.documentElement.style.setProperty("--dark", "#121212");
      document.documentElement.style.setProperty("--text-white", "#e2e2e2");
      document.documentElement.style.setProperty("--text-gray", "#a5a59c");
    }
  };

  return (
    <StyledThemeToggler onClick={toggleTheme} theme={theme} className={props.className}>
      <div className="round">
        {theme === 'dark' ? <MoonSVG /> : <SunSVG />}
      </div>
    </StyledThemeToggler>
  );
};

const StyledThemeToggler = styled.div`
  min-width: 35px;
  height: 18px;
  border-radius: 20px;
  background-color: ${(props) => (props.theme === "dark" ? "#ffffff" : "#444444")};
  border: 1px solid var(--gray-decor);
  padding: 3px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
  .round {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transition: all 0.2s linear;
    transform: translateX(${(props) => (props.theme === "light" ? "18px" : "0")});
  }
`;

export default ThemeToggler;
