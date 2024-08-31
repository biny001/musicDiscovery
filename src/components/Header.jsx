import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMusicList } from "../Slice/MusicSlice";
import { setArtist } from "../Slice/artistSlice";
import Logo from "./Logo";
// import { selectCurrentArtist, selectCurrentMusic } from "../Selectors/selector";

const StyledHeader = styled.header`
  background-color: #171717;
  padding: 1.2rem 4.8rem;
  @media (max-width: 768px) {
    background-color: var(--primary-dark);
    padding: 1.2rem 2rem;
    /* Adjust padding for smaller screens */
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-items: start;
    /* Adjust padding for smaller screens */
  }
`;
// border-bottom: 1px solid var(--secondary-gray);

function Header() {
  return (
    <StyledHeader>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </StyledHeader>
  );
}

export default Header;
