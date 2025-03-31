import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import BugReportIcon from "@mui/icons-material/BugReport";
import CompareIcon from "@mui/icons-material/Compare";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import EditNoteIcon from "@mui/icons-material/EditNote";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import PolicyIcon from "@mui/icons-material/Policy";
import StorageIcon from "@mui/icons-material/Storage";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Avatar } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Navigation } from "@toolpad/core/AppProvider";
import { AppProvider } from "@toolpad/core/nextjs";
import { signIn, signOut } from "next-auth/react";
import * as React from "react";
import theme from "../theme";
import MotionPhotosAutoIcon from "@mui/icons-material/MotionPhotosAuto";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from '@mui/icons-material/Email';
import NotesIcon from '@mui/icons-material/Notes';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import TuneIcon from '@mui/icons-material/Tune';
import { Metadata } from "next";

const NAVIGATION: Navigation = [
    {
        segment: "",
        title: "대시보드",
        icon: <DashboardIcon />,
    },
    {
        kind: "divider",
    },
    {
        segment: "operation",
        title: "운영 관리",
        icon: <TuneIcon />,
        children: [
            {
                segment: "email",
                title: "이메일 전송",
                icon: <EmailIcon />,
            },
        ],
    },
    {
        kind: "divider",
    },
    {
        segment: "resource",
        title: "리소스 관리",
        icon: <StorageIcon />,
        children: [
            {
                segment: "compare",
                title: "리소스 비교",
                icon: <CompareIcon />,
            },
            { segment: "deploy", title: "리소스 배포", icon: <DoubleArrowIcon /> },
            {
                segment: "user",
                title: "사용자 관리",
                icon: <PersonIcon />,
                children: [
                    {
                        segment: "user",
                        title: "사용자 관리",
                        icon: <PersonIcon />,
                    },
                    {
                        segment: "group",
                        title: "그룹 관리",
                        icon: <GroupsIcon />,
                    },
                    {
                        segment: "role",
                        title: "역할 관리",
                        icon: <AccessibilityIcon />,
                    },
                    {
                        segment: "policy",
                        title: "정책 관리",
                        icon: <PolicyIcon />,
                    },
                ],
            },
            {
                segment: "animation",
                title: "애니메이션 관리",
                icon: <MotionPhotosAutoIcon />,
            },
            {
                segment: "sticker",
                title: "스티커 관리",
                icon: <EmojiEmotionsIcon />,
            },
            {
                segment: "template",
                title: "템플릿 관리",
                icon: <DescriptionIcon />,
            },
            {
                segment: "prompt",
                title: "프롬프트 관리",
                icon: <NotesIcon />,
            },
        ],
    },
    {
        kind: "divider",
    },
    {
        segment: "development",
        title: "개발 관리",
        icon: <DeveloperBoardIcon />,
        children: [
            {
                segment: "text",
                title: "텍스트 관리",
                icon: <BugReportIcon />,
            },
            {
                segment: "development",
                title: "개발 환경",
                icon: <LogoDevIcon />,
                children: [
                    {
                        segment: "common-prompt",
                        title: "공통 프롬프트 관리",
                        icon: <LogoDevIcon />,
                    },
                    {
                        segment: "llm-prompt",
                        title: "LLM 관리",
                        icon: <LogoDevIcon />,
                        //icon: <AutoAwesomeIcon />,
                    },
                    {
                        segment: "email",
                        title: "Email 관리 (dev)",
                        icon: <LogoDevIcon />,
                    },
                    {
                        segment: "video",
                        title: "Video 관리 (dev)",
                        icon: <LogoDevIcon />,
                    },         
                ]
            },
            {
                segment: "test",
                title: "테스트",
                icon: <EditNoteIcon />,
                children: [
                    {
                        segment: "recoil",
                        title: "Recoil",
                    },
                    {
                        segment: "api",
                        title: "API",
                    },
                    {
                        segment: "layout",
                        title: "레이아웃",
                    },
                    {
                        segment: "datagrid",
                        title: "데이타그리드",
                    },
                ],
            },
        ],
    },
    {
        kind: "divider",
    },
    {
        segment: "signage",
        title: "사이니지 관리",
        icon: <AdUnitsIcon />,
        children: [
            {
                segment: "device",
                title: "디바이스 관리",
                icon: <AdUnitsIcon />,
            },
        ],
    },
    
];

const BRANDING = {
    title: "SUNNY의 TEST 페이지!!!",
    logo: (
        <Avatar
            src="https://m.segye.com/content/image/2014/12/24/20141224002582_0.jpg"
            alt="10K1M"
            style={{ width: 40, height: 40, borderRadius: "0" }}
        />
    ),
};

const AUTHENTICATION = {
    signIn,
    signOut,
};

export default async function RootLayout(props: { children: React.ReactNode }) {
    //const session = await auth();

    return (
        <html lang="ko" data-toolpad-color-scheme="light" suppressHydrationWarning>
            <body>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <AppProvider
                        navigation={NAVIGATION}
                        branding={BRANDING}
                        theme={theme}
                        //session={session}
                        authentication={AUTHENTICATION}
                    >
                        {props.children}
                    </AppProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}

export const metadata: Metadata = {
  title: "써니의 프론트 테스트",
  description: "Generated by create next app",
  icons: { icon: "/images/favicon.ico" },
};


// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import DashboardLayoutBasic from "@/app/components/dashboard"; // 수정

// const geistSans = Inter({ variable: "--font-geist-sans", subsets: ["latin"] });
// const geistMono = Inter({ variable: "--font-geist-mono", subsets: ["latin"] });


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         <DashboardLayoutBasic>{children}</DashboardLayoutBasic>
//       </body>
//     </html>
//   );
// }




// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const geistSans = Inter({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Inter({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "써니의 프론트 테스트",
//   description: "Generated by create next app",
//   icons: {
//     icon: "/images/favicon.ico",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         {children}
//       </body>
//     </html>
//   );
// }


