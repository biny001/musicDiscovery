import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Card from "../ui/Card";

const GridContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 20px;
`;

const Edit = () => {
  const cards = [
    {
      title: "Daily Mix 1",
      description: "Your daily mix of music",
      image:
        "https://gmaagiihgslcddsumjxi.supabase.co/storage/v1/object/public/media/9d963237-2c53-4810-86b1-2ea8e272b57a-Screenshot%202024-08-28%20094757.png",
    },
    {
      title: "Daily Mix 2",
      description: "Your daily mix of music",
      image:
        "https://gmaagiihgslcddsumjxi.supabase.co/storage/v1/object/public/media/9d963237-2c53-4810-86b1-2ea8e272b57a-Screenshot%202024-08-28%20094757.png",
    },
    // Add more cards as needed
  ];

  return (
    <GridContainer>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </GridContainer>
  );
};

export default Edit;
