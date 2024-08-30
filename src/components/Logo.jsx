import styled from "@emotion/styled";
import Hero from "../../public/Logo.png";

const StyledLogo = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={Hero} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
