import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import styled from "@emotion/styled";
import ColorMode from "./ColorMode";
import {tokens} from "./Theme";
import {useTheme} from "@mui/material";

const actions = [
    {icon: <ColorMode/>, name: 'Color Mode'}
];

const StaticPosition = styled("div")({
    position: "fixed",
    bottom: 1,
    width: "100%",
    textAlign: "end",
    transform: 'translateZ(0px)',
    flexGrow: 1,
    zIndex: 1
})

const ToolDial = () => {
    const colors = tokens(useTheme().palette.mode);
    return (
        <StaticPosition>
            <SpeedDial
                ariaLabel="SpeedDial"
                sx={{
                    position: 'absolute',
                    bottom: 25,
                    right: 25,
                    "& .css-1uoy1rp-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab": {
                        backgroundColor: colors.primary[500]
                    },
                    "& .css-1uoy1rp-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab:hover": {
                        backgroundColor: colors.primary[300]
                    }
                }}
                icon={<SpeedDialIcon/>}>
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}/>
                ))}
            </SpeedDial>
        </StaticPosition>
    );
}

export default ToolDial;