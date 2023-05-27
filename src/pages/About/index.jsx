import React from "react";
import styled from "styled-components";

import Title from "../../components/UI/Title";
import Footer from "../../components/UI/Footer";

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <Title size={2}>📔 About</Title>
      <p>This is a React-SPA to fetch coins data and work with that</p>
      <p>
        Frontend tech stack: react, react-query, react-router-dom, styled-components, sass (scss),
        react-transition-group, chart.js, react-chartjs-2, use-debounce.
      </p>
      <br />
      <p>
        Development and Design:{" "}
        <a href="https://github.com/tapi33" target="_blank" rel="noreferrer">
          Kurets Artyom
        </a>.
      </p>
      <p>
        API's:&nbsp;
        <a href="https://min-api.cryptocompare.com" target="_blank" rel="noreferrer">
          Cryptocompare,
        </a>
        &nbsp;
        <a href="https://www.coingecko.com" target="_blank" rel="noreferrer">
          Coin Gecko
        </a>
        .
      </p>
      <Footer />
    </StyledAboutPage>
  );
};

const StyledAboutPage = styled.div`
  p {
    color: var(--text-white);
    margin-top: 15px;
    font-weight: 300;
    &:first-child {
      margin-top: 0;
    }
  }
  a {
    color: var(--blue);
  }
`;

export default AboutPage;
