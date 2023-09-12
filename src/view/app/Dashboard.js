import {Box, TextField, Typography, useTheme} from "@mui/material";
import {tokens} from "./Theme";
import React, {useState} from "react";
import {javaFile} from "./MockData";
import DifferColor from "./colorful/DifferColor";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [text, setText] = useState(javaFile);

    const javaCodeVisualizer = (javaCode) => {
        let output = [];
        const lines = javaCode.split("\n");
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line === "\n") {
                output.push(<br/>)
            } else {
                output.push(
                    <React.Fragment key={i}>
                        <DifferColor line={line}/>
                    </React.Fragment>
                );
            }
        }
        return <Box sx={{ maxHeight: window.innerHeight / 1.15, overflow: "scroll", overflowX: "hidden"}}>{output}</Box>
    }

    return (
        <Box sx={{
            margin: "20px 20px 0px 20px",
            overflow: "none"
        }}>
            {/*<ToolDial/>*/}
            <Box
                display="grid"
                gridTemplateColumns="repeat(2, 1fr)"
                gap="12px">
                <Box
                    gridColumn="span 1"
                    sx={{
                        marginBottom: "10px",
                        boxShadow: 10,
                        borderRadius: 2
                    }}
                    backgroundColor={colors.primary[400]}>
                    <Box sx={{
                        padding: "2%"
                    }}>
                        <TextField
                            sx={{
                                backgroundColor: "#e0e0e0",
                                borderRadius: 2
                            }}
                            inputProps={{style: {color: "#141414"}}}
                            fullWidth
                            value={text}
                            onChange={e => setText(e.target.value)}
                            multiline
                            rows={window.innerHeight / 22.8}
                        />
                    </Box>
                </Box>

                <Box
                    gridColumn="span 1"
                    sx={{
                        marginBottom: "10px",
                        boxShadow: 10,
                        borderRadius: 2
                    }}
                    backgroundColor={colors.primary[400]}>
                    <Box sx={{padding: "2%"}}>
                        <Box sx={{
                            backgroundColor: colors.primary[900],
                            padding: "2%",
                            borderRadius: 2
                        }}>
                            {javaCodeVisualizer(text)}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;