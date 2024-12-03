import React from "react";
import { Box } from "@mui/material";
import AboutSection from "./sections/AboutSection.tsx";
import AwardsSection from "./sections/AwardsSection.tsx";
import PhotosSection from "./sections/PhotosSection.tsx";
import Footer from "./sections/Footer.tsx";
// import Header from "./sections/Header.tsx";
import IntroSection from "./sections/IntroSection.tsx";

const App = () => {
  return (
    <Box sx={{ background: (theme) => theme.background.light }}>
      {/* <Header /> */}
      <IntroSection />

      <AboutSection />
      <PhotosSection />
      <AwardsSection />
      <Footer />
    </Box>
  );
};

export default App;
