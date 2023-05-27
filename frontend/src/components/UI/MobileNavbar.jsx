import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import { ReactComponent as CoinSVG } from "../../assets/svg/bitcoin.svg";
import { ReactComponent as DashboardSVG } from "../../assets/svg/like.svg";
import { ReactComponent as BlogSVG } from "../../assets/svg/blog.svg";
import { ReactComponent as InfoSVG } from "../../assets/svg/info.svg";
import { ReactComponent as GithubSVG } from "../../assets/svg/github.svg";

const MobileNavbar = () => {
  return (
    <StyledMobileNavbar>
      <Card className="nav-card">
        <NavLink to="/">
          <CoinSVG />
          Coins
        </NavLink>
        <NavLink to="/dashboard">
          <DashboardSVG />
          Dash
        </NavLink>
        <NavLink to="/blog">
          <BlogSVG />
          Blog
        </NavLink>
        <NavLink to="/about">
          <InfoSVG />
          About
        </NavLink>
        <a href="https://github.com/hushdev/Crypto-Rates" target="_blank" rel="noreferrer">
          <GithubSVG />
          GitHub
        </a>
      </Card>
    </StyledMobileNavbar>
  );
};

const StyledMobileNavbar = styled.nav`
  display: none;
  @media (max-width: 730px) {
    display: flex;
    position: fixed;
    bottom: 15px;
    left: 15px;
    width: calc(100% - 30px);
    z-index: 100;
    .nav-card {
      width: 100%;
      display: flex;
      justify-content: space-around;
      overflow: visible;
      background-color: var(--gray-transparent);
      backdrop-filter: blur(10px);
      a {
        color: var(--text-gray);
        text-decoration: none;
        font-weight: 300;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 40px;
        svg {
          fill: var(--text-gray);
          width: 15px;
          height: 15px;
          margin-bottom: 5px;
        }
      }
      a.active {
        color: var(--blue);
        font-weight: 400;
        svg {
          fill: var(--blue);
        }
      }
    }
  }
`;

export default MobileNavbar;
