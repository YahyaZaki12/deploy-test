import { createTheme } from '@mui/material';
import { palette, } from './palette';

export const Theme = createTheme({
    palette: palette,
    typography: {
        fontFamily: "Montserrat"
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "capitalize",
                    borderRadius: "25px",
                    boxShadow: "none",
                    font: "normal normal medium 16px/25px Montserrat",
                    height: "50px",
                    padding: "16px 40px"
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                input: {
                    padding: "16px"
                },
                root: () => {
                    return {
                        borderRadius: "4px",
                        borderColor: "#F3F3F3",
                        backgroundColor: "#F9F9F9",
                        "&::before": {
                            border: "none"
                        },
                        "&::after": {
                            border: "none"
                        },
                        "&:hover": {
                            border: "none"
                        },
                    }
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: "#F3F3F3",
                    borderRadius: "16px",
                    border: "none",
                    "&::before": {
                        border: "none"
                    },
                    "&::after": {
                        border: "none"
                    },
                    "&:hover": {
                        border: "none"
                    },
                }
            }
        }
    }
})