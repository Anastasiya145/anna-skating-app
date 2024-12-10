import React, { FC, ReactNode } from "react";
import { Box, Container } from "@mui/material";
import SectionTitle from "./SectionTitle.tsx";

type SectionTitleProps = {
  title: string;
  children: ReactNode;
  id?: string;
};

const SectionLayout: FC<SectionTitleProps> = ({ title, children, id }) => {
  return (
    <Container sx={{ px: 4, py: 8, minHeight: "400px" }} id={id}>
      <Box>
        <SectionTitle title={title} />
        {children}
      </Box>
    </Container>
  );
};

export default SectionLayout;
