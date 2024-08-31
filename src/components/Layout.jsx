import { Outlet } from "react-router-dom";

import Header from "./Header";
import styled from "@emotion/styled";
import Sidebar from "./Sidebar";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column layout */
  }
`;

const Main = styled.main`
  background-color: var(--primary-dark);
  padding: 2rem 1rem 2rem;
  overflow: hidden;
  overflow-y: scroll;

  @media (max-width: 768px) {
    padding: 2rem; /* Adjust padding for smaller screens */
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />

      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
