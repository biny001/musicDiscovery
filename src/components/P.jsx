/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

// Define the styled component
const StyledP = styled.p`
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color || "white"};
  line-height: 1.2;
`;

// Define the functional component
const H1 = ({ children, fontSize, color }) => {
  return (
    <StyledP fontSize={fontSize} color={color}>
      {children}
    </StyledP>
  );
};

export default H1;
