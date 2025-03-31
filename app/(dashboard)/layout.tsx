"use client";
import { PageContainer } from "@toolpad/core";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import * as React from "react";
import { RecoilRoot } from "recoil";

export default function Layout(props: { children: React.ReactNode }) {
    // maxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    return (
        <DashboardLayout>
            <PageContainer title="" maxWidth="xl">
                <RecoilRoot>{props.children}</RecoilRoot>
            </PageContainer>
        </DashboardLayout>
    );
}
