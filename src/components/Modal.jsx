import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "@emotion/styled";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--modal-background);
  border-radius: var(--rounded-md);
  box-shadow: var(--shadow-md);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0rem;
  border-radius: var(--rounded-md);
  transform: translateX(0.9rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;
  cursor: pointer;

  @media (max-width: 500px) {
    /* Media query for smaller devices */
    padding: 0px 0px; /* Reduced horizontal padding on smaller screens */

    transform: translateX(-1rem);
  }

  &:hover {
    background-color: var(--secondary-dark);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

function Modal({ children, setshowForm, showForm }) {
  const handleClose = () => {
    setshowForm(false);
  };
  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={handleClose}>
          <HiXMark color="white" />
        </Button>

        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default Modal;
