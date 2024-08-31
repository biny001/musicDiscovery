import styled from "@emotion/styled";
import { useDispatch } from "react-redux";

const DeleteWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  border-radius: 8px;
`;

const DeleteButton = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background-color: #d32f2f; /* Red color for delete */
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b71c1c; /* Darker red on hover */
  }
`;

const CancelButton = styled.button`
  padding: 12px 20px;
  border: 1px solid var(--primary-gray); /* Blue border for consistency */
  border-radius: 8px;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: var(--primary-gray); /* Blue background on hover */
    border-color: var(--primary-gray); /* Darker blue border on hover */
  }
`;

const StyledHeader = styled.h1`
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const DeleteModal = ({ id, setshowForm }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({
      type: "music/deleteMusicList",
      payload: id,
    });
    setshowForm(false);
  };

  return (
    <>
      <StyledHeader>Are you sure you want to delete this song?</StyledHeader>
      <DeleteWrapper>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        <CancelButton onClick={() => setshowForm(false)}>Cancel</CancelButton>
      </DeleteWrapper>
    </>
  );
};

export default DeleteModal;
