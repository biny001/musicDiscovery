import styled from "@emotion/styled";
import Hero from "../../public/Logo.png";

const StyledLogo = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  height: 3.5rem;
  width: auto;

  @media (max-width: 768px) {
    height: 3.5rem;
    width: auto;
    /* Adjust padding for smaller screens */
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={Hero} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
