/* eslint-disable no-unused-vars */
import styled from "@emotion/styled";
import { useState } from "react";

import { HiPencil, HiTrash } from "react-icons/hi2";
import H1 from "./H1";

import { BsThreeDotsVertical } from "react-icons/bs";
import EditForm from "../ui/EditForm";
import Modal from "./Modal";
import { useDispatch } from "react-redux";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 0.8rem 2.6rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--primary-gray);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--third-gray);
  font-family: "Poppins";
`;

const Time = styled.div`
  font-family: "Sono";
  font-weight: 300;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: evenly;
  height: 100%;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || "var(--primary-green)"};
  border: none;
  padding: 0.8rem;
  border-radius: 0.6rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.hoverColor || "var(--secondary-green)"};
  }
`;

const Menu = styled.div`
  position: absolute;
  right: 0;
  z-index: 10;
  margin-top: 0.5rem;
  width: 10rem;
  background-color: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
const MenuButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #4a5568;
  background-color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #f7fafc;
  }
`;
const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
  text-align: left;
`;

function MusicRow({ music }) {
  const [showForm, setshowForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <TableRow role="row">
        <Img src={music?.image} alt="cover art" />
        <Cabin> {music?.title} </Cabin>
        <H1 fontSize={"0.8rem"}>{music?.artist}</H1>
        <Time>{music?.length}</Time>

        <ButtonContainer>
          <Button onClick={() => setshowForm(true)}>
            <HiPencil />
          </Button>
          <Button
            color="var(--primary-red)"
            hoverColor={"var(--secondary-red)"}
            onClick={() =>
              dispatch({
                type: "music/deleteMusicList",
                payload: music.id,
              })
            }
          >
            <HiTrash />
          </Button>
        </ButtonContainer>
      </TableRow>
      {showForm && (
        <Modal setshowForm={setshowForm}>
          <EditForm music={music} setshowForm={setshowForm} />
        </Modal>
      )}
    </>
  );
}

export default MusicRow;
