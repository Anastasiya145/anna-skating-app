import React from "react";
import Grid from "@mui/material/Grid2";
import SectionLayout from "../components/SectionLayout.tsx";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const AwardsSection = () => {
  const awards = [
    { title: "Золотая медаль", image: "/images/award1.jpg" },
    { title: "Приз зрительских симпатий", image: "/images/award2.jpg" },
  ];

  return (
    <SectionLayout title="Награды">
      <Grid container spacing={4}>
        {awards.map((award, index) => (
          <Grid size={12} key={index}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                image={award.image}
                alt={award.title}
                height="200"
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                >
                  {award.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SectionLayout>
  );
};

export default AwardsSection;
