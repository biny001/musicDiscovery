import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Card from "../ui/Card";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import AddForm from "../ui/AddForm";
import { useDispatch, useSelector } from "react-redux";

const GridContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 20px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || "var(--primary-gray)"};
  border: none;
  border-radius: 0.4rem;
  padding: 0.8rem;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  font-family: "Poppins";
  font-weight: 500;
`;

const Home = () => {
  const [showForm, setshowForm] = useState(false);
  const { musicList, loading, error } = useSelector((state) => state.music);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "music/getMusicList" }); // Trigger fetch
  }, [dispatch]);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h3">Your Music</Heading>
        <Button onClick={() => setshowForm(true)}>Add new music</Button>{" "}
        {showForm && (
          <Modal setshowForm={setshowForm} showForm={showForm}>
            <AddForm setshowForm={setshowForm} />
          </Modal>
        )}
      </Row>

      <GridContainer>
        {musicList?.map((music, index) => (
          <Card key={index} music={music} />
        ))}
      </GridContainer>
    </>
  );
};

export default Home;

// import MusicTable from "../components/MusicTable";
// import Row from "../ui/Row";
// import Heading from "../ui/Heading";
// import styled from "@emotion/styled";
// import { useEffect, useState } from "react";
// import Modal from "../components/Modal";
// import AddForm from "../ui/AddForm";
// import { useDispatch, useSelector } from "react-redux";

// const Button = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: ${(props) => props.color || "var(--primary-gray)"};
//   border: none;
//   border-radius: 0.4rem;
//   padding: 0.8rem;
//   cursor: pointer;
//   font-size: 1rem;
//   color: white;
//   font-family: "Poppins";
//   font-weight: 500;
// `;

// const Home = () => {
//   const [showForm, setshowForm] = useState(false);
//   const dispatch = useDispatch();
// const { musicList, loading, error } = useSelector((state) => state.music);

// useEffect(() => {
//   dispatch({ type: "music/getMusicList" }); // Trigger fetch
// }, [dispatch]);

//   console.log(musicList);

//   return (
//     <>
//       <Row type="horizontal">
//         <Heading as="h3">Your Music</Heading>
//       </Row>

//       <Row>
//         <MusicTable />

//         <Button onClick={() => setshowForm(true)}>Add new music</Button>
//         {showForm && (
//           <Modal setshowForm={setshowForm} showForm={showForm}>
//             <AddForm setshowForm={setshowForm} />
//           </Modal>
//         )}
//       </Row>
//     </>
//   );
// };

// export default Home;
