import React, { createContext, useContext, useState, ReactNode } from "react";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert, { AlertProps } from "@mui/material/Alert";

type SnackbarOptions = {
    message: string;
    severity?: AlertProps["severity"];
    autoHideDuration?: number;
};

type SnackbarContextType = {
    showSnackbar: (options: SnackbarOptions) => void;
    hideSnackbar: () => void; // 스낵바를 외부에서 닫는 함수
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(false);
    const [snackbarOptions, setSnackbarOptions] = useState<SnackbarOptions>({
        message: "",
        severity: "info",
        autoHideDuration: 6000,
    });

    const showSnackbar = (options: SnackbarOptions) => {
        setSnackbarOptions(options);
        setOpen(true);
    };

    const hideSnackbar = () => {
        setOpen(false);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar, hideSnackbar }}>
            {children}
            <Snackbar
                open={open}
                autoHideDuration={snackbarOptions.autoHideDuration}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={handleClose}
                    severity={snackbarOptions.severity}
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    {snackbarOptions.message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    );
};

export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error("useSnackbar must be used within a SnackbarProvider");
    }
    return context;
};
