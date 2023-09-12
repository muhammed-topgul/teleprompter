import "../../style/index.css"
import {ColorModeContext, useMode} from "./Theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import React from "react";

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="app">
                    <main className="content">
                        <Routes>
                            <Route path="/" element={<Dashboard/>}/>
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
