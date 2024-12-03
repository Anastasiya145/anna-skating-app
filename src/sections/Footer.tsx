import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CustomButtonWithIcon from "../components/CustomButtonWithIcon.tsx";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        padding: 2,
        marginTop: 8,
      }}
    >
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="body1" mb={2}>
          Свяжитесь со мной:
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <CustomButtonWithIcon
            href="https://instagram.com/a_anneeetttt"
            title="Instagram"
            icon={InstagramIcon}
          />
          <CustomButtonWithIcon
            href="mailto:anyta1056@gmail.com"
            title="Email"
            icon={EmailIcon}
          />
          <CustomButtonWithIcon
            href="tel:++33769997994"
            title="Call me"
            icon={PhoneIcon}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
