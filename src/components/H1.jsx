/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

// Define the styled component
const StyledH1 = styled.h1`
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color || "white"};
  line-height: 1.2;
`;

// Define the functional component
const H1 = ({ children, fontSize, color }) => {
  return (
    <StyledH1 fontSize={fontSize} color={color}>
      {children}
    </StyledH1>
  );
};

export default H1;
