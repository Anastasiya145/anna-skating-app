import React from "react";
import SectionLayout from "../components/SectionLayout.tsx";
import { Stack, Typography } from "@mui/material";

const AwardsSection = () => {
  const career = [
    {
      title: "école de patinage artistique “LIDER”, Ukraine",
      period: "2010 - 2023",
    },
    { title: "membre de l'équipe nationale d'Ukraine", period: "2021 - 2023" },
    { title: "club “AXEL”, Caen, France", period: "2023" },
  ];

  return (
    <SectionLayout title="Mon experience professionnel">
      {career.map((item, index) => (
        <Stack key={index} spacing={2} direction="row">
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, minWidth: "100px" }}
          >
            {item.period}
          </Typography>
          <Typography variant="body1">{item.title}</Typography>
        </Stack>
      ))}
    </SectionLayout>
  );
};

export default AwardsSection;
