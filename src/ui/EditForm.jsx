import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, updateField, setField } from "../Slice/addMusicSlice";
import { useEffect } from "react";

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 32px;
  min-width: 450px; /* Increased form width */
  margin: 20px auto; /* Centered form horizontally */
  padding: 14px 100px;

  @media (max-width: 500px) {
    /* Media query for smaller devices */
    padding: 0px 0px; /* Reduced horizontal padding on smaller screens */
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8); /* Lighter white color for labels */
`;

const Input = styled.input`
  padding: 12px 16px; /* Increased height for inputs */
  border: 1px solid #003f7f; /* Dark blue border */
  border-radius: 8px;
  background-color: transparent;
  color: white; /* White text color inside input */
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  outline: none;

  &:focus {
    border-color: #0056b3;
    box-shadow: 0 0 0 4px rgba(0, 86, 179, 0.2); /* Blue-black ring on focus */
  }

  &::placeholder {
    color: #aaa; /* Optional: Lighter text for placeholders */
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px; /* Increased height for textarea */
  border: 1px solid #003f7f; /* Dark blue border */
  border-radius: 8px;
  background-color: transparent;
  color: white; /* White text color inside input */
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  outline: none;
  resize: vertical; /* Allow vertical resizing only */

  &:focus {
    border-color: #0056b3;
    box-shadow: 0 0 0 4px rgba(0, 86, 179, 0.2); /* Blue-black ring on focus */
  }

  &::placeholder {
    color: #aaa; /* Optional: Lighter text for placeholders */
  }
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  padding: 12px 20px; /* Increased button size */
  border: none;
  border-radius: 8px;
  background-color: #0056b3;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #003f7f;
  }
`;

const EditForm = ({ setshowForm, music }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.addMusic);

  useEffect(() => {
    dispatch(setField(music));
    console.log(formData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submitted data:", {
    //   ...formData,
    //   id: 12,
    //   createdAt: new Date().toISOString(),
    // });

    dispatch({
      type: "music/updateMusicList",
      payload: {
        id: music?.id,
        item: {
          ...formData,
        },
      },
    });

    setshowForm(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormWrapper>
        <Label htmlFor="songTitle">Song Title:</Label>
        <Input
          value={formData.title}
          onChange={handleChange}
          required={true}
          name="title"
          id="songTitle"
          placeholder="Enter song title"
        />

        <Label htmlFor="artist">Artist:</Label>
        <Input
          value={formData.artist}
          onChange={handleChange}
          required={true}
          name="artist"
          id="artist"
          placeholder="Enter artist name"
        />

        <Label htmlFor="genre">genre:</Label>
        <Input
          value={formData.genre}
          onChange={handleChange}
          required={true}
          name="genre"
          id="genre"
          placeholder="Enter genre"
        />

        <Label htmlFor="length">Length:</Label>
        <Input
          value={formData.length}
          onChange={handleChange}
          required={true}
          name="length"
          id="length"
          placeholder="length"
        />

        <Label htmlFor="description">Description:</Label>
        <TextArea
          id="description"
          name="description"
          required={true}
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter song description"
          rows="4"
        />

        <SubmitButton type="submit">Add Music</SubmitButton>
      </FormWrapper>
    </form>
  );
};

export default EditForm;

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };
