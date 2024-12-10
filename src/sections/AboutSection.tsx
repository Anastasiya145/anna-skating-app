import React from "react";
import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SectionLayout from "../components/SectionLayout.tsx";
import photo from "../assets/images/my-photo-new.jpg";

const AboutSection = () => {
  return (
    <SectionLayout title="Bonjour! Je m'appelle Anya" id="about">
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
              Je suis une patineuse artistique professionnelle avec de
              nombreuses années d'expérience. Figuré le patinage pour moi n'est
              pas seulement un sport, c'est un art, une passion et l’opportunité
              d’inspirer les autres.
            </Typography>
            <Typography variant="body1">
              J'adore patiner sur glace et je participe activement à des
              compétitions, et Je fais également partie de l'équipe de patinage
              synchronisé.
            </Typography>
            <Typography variant="body1">
              Outre le patinage artistique, je suis passionné par
              l'informatique. C'est pourquoi je créé ce site pour allier mes
              passions et partager qu'ils reposent en paix.
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <span role="img" aria-label="location" style={{ marginRight: 8 }}>
                📍
              </span>
              Je suis à Caen, France
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </SectionLayout>
  );
};

export default AboutSection;
