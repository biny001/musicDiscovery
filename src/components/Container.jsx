import styled from "@emotion/styled";

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0.5rem;

  max-width: 1024px;
`;

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return <ContainerWrapper>{children} </ContainerWrapper>;
};

export default Container;
