import { Outlet } from "react-router-dom";

import Header from "./Header";
import styled from "@emotion/styled";
import Sidebar from "./Sidebar";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--primary-dark);
  padding: 4rem 4.8rem 6.4rem;
  overflow: hidden;
  overflow-y: scroll;
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
