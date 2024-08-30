import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMusicList } from "../Slice/MusicSlice";
import { setArtist } from "../Slice/artistSlice";
// import { selectCurrentArtist, selectCurrentMusic } from "../Selectors/selector";

const StyledHeader = styled.header`
  background-color: #171717;
  padding: 1.2rem 4.8rem;
`;
// border-bottom: 1px solid var(--secondary-gray);

function Header() {
  return <StyledHeader></StyledHeader>;
}

export default Header;
