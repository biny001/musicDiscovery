import styled from "@emotion/styled";
import { useState } from "react";
import { FaPlay, FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import EditForm from "./EditForm";
import Modal from "../components/Modal";

const PlayButton = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #1db954;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateY(10px);
`;

const StyledCard = styled.div`
  background-color: #181818;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: #282828;
  }

  &:hover ${PlayButton} {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
`;

const CardContent = styled.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardTitle = styled.h3`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0;
`;

const CardDescription = styled.p`
  color: #b3b3b3;
  font-size: 14px;
  margin: 0;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;
const EditButton = styled.button`
  background: transparent;
  border: none;
  color: #b3b3b3;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
`;
const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #b3b3b3;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #ff4d4d;
  }
`;

const Card = ({ music }) => {
  const { title, id, length, description, genre, artist, image } = music;
  const [showForm, setshowForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <StyledCard>
      <CardImageContainer>
        <CardImage src={image} alt={title} />
        <PlayButton>
          <FaPlay />
        </PlayButton>
      </CardImageContainer>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{artist}</CardDescription>
        <IconContainer>
          <EditButton onClick={() => setshowForm(true)}>
            <FaEdit />
          </EditButton>
          <DeleteButton
            onClick={() =>
              dispatch({
                type: "music/deleteMusicList",
                payload: music?.id,
              })
            }
          >
            <FaTrash />
          </DeleteButton>
        </IconContainer>
      </CardContent>
      {showForm && (
        <Modal setshowForm={setshowForm}>
          <EditForm music={music} setshowForm={setshowForm} />
        </Modal>
      )}
    </StyledCard>
  );
};

export default Card;
