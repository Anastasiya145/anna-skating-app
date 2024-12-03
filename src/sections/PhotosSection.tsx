import React from "react";
import { Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import SectionLayout from "../components/SectionLayout.tsx";
import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PhotosSection = () => {
  const photos = [photo1, photo2, photo3, photo4, photo5];

  return (
    <SectionLayout title="Моменты на льду">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {photos.map((photo, index) => (
          <Box key={index}>
            <img
              src={photo}
              alt={`Ice skating ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        ))}
      </Carousel>
    </SectionLayout>
  );
};

export default PhotosSection;
