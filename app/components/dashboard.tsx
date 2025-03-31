// "use client"; // 클라이언트 컴포넌트로 지정

// import * as React from "react";
// import { extendTheme } from '@mui/material/styles';
// import styled from '@mui/material/styles/styled';
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import DescriptionIcon from "@mui/icons-material/Description";
// import LayersIcon from "@mui/icons-material/Layers";
// import { AppProvider, Navigation, Router } from "@toolpad/core/AppProvider";
// import { DashboardLayout } from "@toolpad/core/DashboardLayout";
// import { PageContainer } from "@toolpad/core/PageContainer";
// import Grid from "@mui/material/Grid";

// const NAVIGATION: Navigation = [
//   { kind: "header", title: "Main items" },
//   { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon /> },
//   { segment: "orders", title: "Orders", icon: <ShoppingCartIcon /> },
//   { kind: "divider" },
//   { kind: "header", title: "Analytics" },
//   {
//     segment: "reports",
//     title: "Reports",
//     icon: <BarChartIcon />,
//     children: [
//       { segment: "sales", title: "Sales", icon: <DescriptionIcon /> },
//       { segment: "traffic", title: "Traffic", icon: <DescriptionIcon /> },
//     ],
//   },
//   { segment: "integrations", title: "Integrations", icon: <LayersIcon /> },
// ];

// const demoTheme = extendTheme({
//   colorSchemes: { light: true, dark: true },
//   colorSchemeSelector: "class",
//   breakpoints: { values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 } },
// });

// function useDemoRouter(initialPath: string): Router {
//   const [pathname, setPathname] = React.useState(initialPath);

//   return React.useMemo(
//     () => ({
//       pathname,
//       searchParams: new URLSearchParams(),
//       navigate: (path: string | URL) => setPathname(String(path)),
//     }),
//     [pathname]
//   );
// }

// const Skeleton = styled("div")<{ height: number }>(({ theme, height }) => ({
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: theme.shape.borderRadius,
//   height,
//   content: '" "',
// }));

// export default function DashboardLayoutBasic({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const router = useDemoRouter("/dashboard");

//   return (
//     <AppProvider navigation={NAVIGATION} router={router} theme={demoTheme}>
//       <DashboardLayout>
//         <PageContainer>
//           <Grid container spacing={1}>
//             <Grid item xs={12}>
//               <Skeleton height={14} />
//             </Grid>
//             <Grid item xs={4}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid item xs={8}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid item xs={12}>
//               <Skeleton height={150} />
//             </Grid>
//           </Grid>
//           {children}
//         </PageContainer>
//       </DashboardLayout>
//     </AppProvider>
//   );
// }
