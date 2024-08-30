import styled from "@emotion/styled";

// import Spinner from "../../ui/Spinner";
import MusicRow from "./MusicRow";
import H1 from "./H1";
import { useSelector } from "react-redux";
// import { useCabins } from "./useCabins";

const Table = styled.div`
  border: 1px solid var(--primary-gray);

  font-size: 1.4rem;
  background-color: #171717;
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--primary-dark);
  border-bottom: 1px solid var(--primary-gray);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function CabinTable() {
  const { musicList, loading, error } = useSelector((state) => state.music);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //   if (isLoading) return <Spinner />;

  if (musicList?.length === 0) return <H1>Start Adding music </H1>;

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <H1 fontSize={"18px"}>Artist</H1>
        <H1 fontSize={"18px"}>Track</H1>
        <H1 fontSize={"18px"}>duration</H1>
        {/* <H1 fontSize={"18px"}>Discount</H1> */}
        <div></div>
      </TableHeader>
      {/* music elements */}

      {musicList.map((music) => (
        <MusicRow key={music.id} music={music} />
      ))}
      {/* <MusicRow />
      <MusicRow />
      <MusicRow />
      <MusicRow />
      <MusicRow />
      <MusicRow />
      <MusicRow />
      <MusicRow /> */}
    </Table>
  );
}

export default CabinTable;
