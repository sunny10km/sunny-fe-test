"use client";

import { Box, Typography } from "@mui/material";


const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: "flex", // Flexbox 활성화
        justifyContent: "left", // 가로 중앙 정렬
        alignItems: "center", // 세로 중앙 정렬
        height: "100%", // 컨테이너 높이를 부모에 맞춤
        width: "100%", // 컨테이너 너비를 부모에 맞춤
    },
    typography: {
        margin: 1,
        fontSize: "14px",
    },
};

type ContentBoxProps = {
    value?: string | null; // 표시할 값
    defaultValue?: string; // 값이 없을 때 표시할 기본 메시지
  };


const VideoPage: React.FC<ContentBoxProps> = ({ value, defaultValue = "No Content" }) => {
    return (
        <Box style={styles.container}>
            <Typography variant="body2" style={styles.typography}>
                {value ? (
                 <span>{value}</span>
                ) : (
                <span style={{ color: "gray", opacity: 0.6 }}>{defaultValue}</span>
                )}
            </Typography>
        </Box>
    )
};

export default VideoPage;