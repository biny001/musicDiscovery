import styled from "@emotion/styled";
import Logo from "./Logo";

const StyledSidebar = styled.aside`
  background-color: #171717;
  padding: 3.2rem 2.4rem;

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 768px) {
    display: none; /* Hide sidebar on small screens */
  }
`;
//  // border-right: 0.5px solid var(--secondary-gray);

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
    </StyledSidebar>
  );
}

export default Sidebar;
