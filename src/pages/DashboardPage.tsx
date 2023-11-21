import React from "react";
import DashboardComponent from "./components/Dashboard";
import { DashboardPageProps, DashboardCompProps } from "../types/dashboard";

export default function DashboardPage(props: DashboardPageProps) {

    const { dashboardRouteProps } = props;

    const dashboardCompProps = {
        drawerWidth: 240,
        dashboardRouteProps
    }

    return (
        <div className="dashboard-page-cover-flex">
            <div className="dashboard-page-cover-item">
                <DashboardComponent 
                    {...dashboardCompProps}
                />
            </div>
        </div>
    )
}