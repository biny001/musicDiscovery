import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}

    @media (max-width: 768px) {
    margin-bottom: 25px; /* Adjust padding for smaller screens */
  }
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
