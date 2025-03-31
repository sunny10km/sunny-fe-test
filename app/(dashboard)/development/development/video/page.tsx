"use client";
import { Box } from "@mui/material";
import React from "react";
import VideoPage from "./video";
import { SnackbarProvider } from "./components/SnackbarProvider";

export default function VideoCombinedPage() {
    return (
        <Box sx={{ position: "relative", width: "100%", height: "100vh" }}>
            {/* <SnackbarProvider>
                <StickerPage />
            </SnackbarProvider> */}
            <VideoPage></VideoPage>
        </Box>
    );
}
