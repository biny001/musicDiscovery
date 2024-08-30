import styled from "@emotion/styled";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: 10px;
  transition: all 0.2s;

  &:hover {
    background-color: var(--secondary-gray);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--third-gray);
  }
`;

export default ButtonIcon;
