"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: "data-toolpad-color-scheme",
    },
    colorSchemes: { light: true, dark: true },
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: "1em",
                },
            },
        },
    },
});

export default theme;
