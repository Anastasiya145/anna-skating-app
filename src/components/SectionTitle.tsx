import React, { FC } from "react";
import { Typography } from "@mui/material";

type SectionTitleProps = {
  title: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <Typography
      variant="h2"
      sx={{
        textAlign: "center",
        fontWeight: "bold",
        color: (theme) => theme.palette.primary.dark,
        marginBottom: 4,
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionTitle;
