import React from "react";
import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SectionLayout from "../components/SectionLayout.tsx";
import photo from "../assets/images/photo1.jpg";

const AboutSection = () => {
  return (
    <SectionLayout title="Привет! Меня зовут Аня" id="about">
      <Grid container sx={{ marginTop: 5, justifyContent: "space-between" }}>
        <Grid size={4}>
          <img
            src={photo}
            alt="Me"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid size={6}>
          <Stack spacing={2}>
            <Typography variant="body1">
              Я профессиональная фигуристка с многолетним опытом. Фигурное
              катание для меня — это не просто спорт, это искусство, страсть и
              возможность вдохновлять других.
            </Typography>
            <Typography variant="body1">
              Я обожаю кататься на льду и активно участвую в соревнованиях, а
              также являюсь частью команды по синхронному катанию.
            </Typography>
            <Typography variant="body1">
              Кроме фигурного катания, я увлечена информатикой. Именно поэтому я
              создала этот сайт, чтобы объединить свои увлечения и поделиться
              ими с миром.
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <span role="img" aria-label="location" style={{ marginRight: 8 }}>
                📍
              </span>
              Я нахожусь в городе Caen, France
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </SectionLayout>
  );
};

export default AboutSection;
