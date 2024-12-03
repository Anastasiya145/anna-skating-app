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
        backgroundColor: "#fff",
        color: (theme) => theme.palette.primary.dark,
      }}
      startIcon={<Icon />}
    >
      {title}
    </Button>
  );
};

export default CustomButtonWithIcon;
