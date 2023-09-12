import React, {useContext} from 'react';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import {IconButton, useTheme} from "@mui/material";
import {ColorModeContext} from "./Theme";

const ColorMode = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon/>
                ) : (
                    <LightModeOutlinedIcon/>
                )}
            </IconButton>
        </>
    );
};

export default ColorMode;