import React from "react";
import styled from "styled-components";
import ThemeToggler from "./ThemeToggler";
import Container from "./Container";
import { NavLink } from "react-router-dom";
import Row from "./Row";
import Button from "./Button";
import { ReactComponent as LogoSVG } from "../../assets/svg/logo.svg";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Container>
        <Row justifyContent="space-between" alignItems="center">
          <NavLink to="/" className="logo">
            <LogoSVG />
            <div>Кириптоактивы</div>
          </NavLink>
          <ul>
            <Search className="search-bar" />
            <NavLink to="/">Активы</NavLink>
            <NavLink to="/dashboard">Сохраненные</NavLink>
            <NavLink to="/blog">Новости</NavLink>
            {/* <NavLink to="/profile">Tapi33</NavLink> */}
            <NavLink to="/sign-in">Войти</NavLink>
            <NavLink to="/sign-up">Зарегистрироваться</NavLink>
            <ThemeToggler className="nav-theme-toggler" />
          </ul>
        </Row>
      </Container>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  background-color: var(--gray-transparent);
  backdrop-filter: blur(10px);
  padding: 8px 15px;
  border-bottom: 1px solid var(--gray-decor);
  margin-bottom: 25px;
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: var(--shadow);
  z-index: 100;

  & .logo {
    font-weight: 500;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--text-white);

    svg {
      width: 25px;
      height: auto;
      margin-right: 5px;
    }
  }
  & ul {
    display: flex;
    align-items: center;
    .search-bar {
      width: 170px;
      margin-right: 10px;
    }
  }
  & ul a {
    margin-right: 10px;

    color: var(--text-gray);
    text-decoration: none;
    font-weight: 400;
  }
  & ul .github-btn {
    padding: 5px 10px !important;
  }
  & ul .github-btn a.github {
    color: #ffffff;
    margin-right: 0;
  }
  & ul .active {
    color: var(--text-white);
    font-weight: 500;
  }
  @media (max-width: 730px) {
    padding: 8px 0;
    & .logo div {
      display: none;
    }
    & ul a,
    & ul .github-btn {
      display: none;
    }
    & ul .nav-theme-toggler {
      margin-right: 0;
    }
    & ul .search-bar {
      width: 150px;
    }
  }
`;

export default Navbar;
