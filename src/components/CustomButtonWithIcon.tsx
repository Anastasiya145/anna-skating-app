import React, { FC } from "react";
import { Button } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

type CustomButtonWithIconProps = {
  href: string;
  title: string;
  icon: SvgIconComponent;
};

const CustomButtonWithIcon: FC<CustomButtonWithIconProps> = ({
  href,
  icon: Icon,
  title,
}) => {
  return (
    <Button
      href={href}
      variant="contained"
      target="_blank"
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.main,
        color: "#fff",
        fontWeight: "bold",
        padding: "10px 20px",
        "&:hover": {
          backgroundColor: (theme) => theme.palette.secondary.dark,
        },
      }}
      startIcon={<Icon />}
    >
      {title}
    </Button>
  );
};

export default CustomButtonWithIcon;
