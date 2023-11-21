import React, {useState} from "react";
import { Box } from "@mui/system";
import DrawerComponent from "./DrawerComponent";
import { SideDrawerCompProps } from "../../../types/side-drawer-comp";


export default function SideDrawerComponent(props: SideDrawerCompProps) {

    const { sideDrawerCompProps } = props;
    
    return (
        <div className="side-drawer-cover-flex">
            <div className="side-drawer-cover-item">
                <DrawerComponent 
                    drawerWidth={sideDrawerCompProps.drawerWidth}
                    mobileOpen={sideDrawerCompProps.mobileOpen}
                    handleDrawerToggle={sideDrawerCompProps.handleDrawerToggle}
                    dashboardRouteProps={sideDrawerCompProps.dashboardRouteProps}
                />
            </div>
        </div>
    )
}