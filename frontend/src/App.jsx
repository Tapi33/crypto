import React from "react";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import AboutPage from "./pages/About";
import DashboardPage from "./pages/Dashboard";
import GraphPage from "./pages/Graph";
import CoinsView from "./pages/Coins";
import BlogPage from "./pages/Blog";
import Authorization from './pages/Authorization';
import Registration from './pages/Registration';

import Container from "./components/UI/Container";
import Navbar from "./components/UI/Navbar";
import MobileNavbar from "./components/UI/MobileNavbar";

const App = () => {
  const location = useLocation();
  const queryClient = new QueryClient();
  const baseUrl = process.env.REACT_APP_API;

  return (
    <StyledApp>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <MobileNavbar />
        <Container>
          <TransitionGroup component={"div"}>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Routes>
                <Route path="/" element={<CoinsView baseUrl={baseUrl} />} />
                <Route path="/graph/:id" element={<GraphPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/sign-in" element={<Authorization />} />
                <Route path="/sign-up" element={<Registration />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </Container>
      </QueryClientProvider>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  position: relative;
  padding-bottom: 20px;
  @media (max-width: 730px) {
    padding-bottom: 79px;
  }
`;

export default App;
