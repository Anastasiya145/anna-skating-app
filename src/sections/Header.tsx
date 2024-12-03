import React, { FC } from "react";
import { AppBar, Toolbar, Typography, Box, Link } from "@mui/material";
import IceSkatingIcon from "@mui/icons-material/AcUnit";

type HeaderButtonProps = {
  title: string;
  href: string;
};

const HeaderButton: FC<HeaderButtonProps> = ({ title, href }) => {
  return (
    <Link sx={{ color: "#fff", marginX: 1 }} href={href}>
      <Typography variant="body1">{title}</Typography>
    </Link>
  );
};

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: (theme) => theme.background.main,
        boxShadow: "none",
        padding: 1.5,
      }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <IceSkatingIcon
            sx={{ fontSize: 36, marginRight: 1, color: "#fff" }}
          />
          <Typography variant="h3" sx={{ color: "#fff" }}>
            Мой мир на льду
          </Typography>
        </Box>
        <Box>
          <HeaderButton title="About me" href={sections.about} />
          <HeaderButton title="Contact me" href={sections.contact} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
