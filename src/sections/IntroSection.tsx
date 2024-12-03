import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import IceSkatingIcon from "@mui/icons-material/AcUnit";

const IntroSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #6e7f7f, #b4c6c4)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 3,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <IceSkatingIcon sx={{ fontSize: 60, color: "#fff", marginBottom: 2 }} />
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontWeight: 600,
            marginBottom: 2,
            letterSpacing: 2,
          }}
        >
          Добро пожаловать в мир фигурного катания!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#fff",
            maxWidth: "600px",
            margin: "0 auto 2rem",
            fontSize: 18,
            lineHeight: 1.6,
          }}
        >
          Я — фигуристка, которая живет этим искусством и движением. Тут вы
          найдете мои истории, опыт, а также мои достижения на льду.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            color: "#fff",
            fontWeight: "bold",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: (theme) => theme.palette.secondary.dark,
            },
          }}
          href="#about"
        >
          Узнать больше
        </Button>
      </motion.div>
    </Box>
  );
};

export default IntroSection;
