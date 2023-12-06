import React,{useState} from "react";
import { Box } from "@mui/system";
import HeaderComponent from "../Header";
import SideDrawerComponent from "../SideDrawer/SideDrawerComponent";
import { DashboardCompProps } from "../../../types/dashboard";
import DashboardSubpages from "./subpages";
import { Toolbar } from "@mui/material";

export default function DashboardComponent(props: DashboardCompProps) {

    const { dashboardRouteProps, drawerWidth } = props;

    const [mobileOpen, setMobileOpen] = useState<boolean>(true);

    const handleDrawerToggle = () => {
        setMobileOpen(prev => !prev);
    }

    const appBarProps = {
        drawerWidth: 0,
        handleDrawerToggle
    }

    const sideDrawerCompProps = {
        drawerWidth,
        mobileOpen,
        handleDrawerToggle,
        dashboardRouteProps
    }
    
    return (
        <div className="dashboard-cover-flex">
            <div className="dashboard-cover-item">
                <Box className="dashboard-box-cover">
                    <HeaderComponent appBarProps={appBarProps}/>
                    <SideDrawerComponent sideDrawerCompProps={sideDrawerCompProps} />
                    <Box
                        className="dashboard-content-box-cover"
                        component="main"
                        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                    >
                        <div className="dashboard-content-cover-flex">
                            <div className="dashboard-content-cover-item">
                                <Toolbar />
                                <DashboardSubpages />
                            </div>
                        </div>
                    </Box>
                </Box>
            </div>
        </div>
    )
}