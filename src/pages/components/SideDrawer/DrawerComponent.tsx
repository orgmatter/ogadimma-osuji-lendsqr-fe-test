import React from "react";
import { Drawer, Box } from "@mui/material";
import DrawerListComponent from "./DrawerListComponent";
import { DrawerProps } from "../../../types/side-drawer-comp";
import { useMedia } from "../../../hooks/useMedia";

export default function DrawerComponent(props: DrawerProps) {

    const { drawerWidth, mobileOpen, handleDrawerToggle, dashboardRouteProps } = props;

    const { media } = useMedia("(max-width: 680.20px)");
    
    return (
        <Box className="box-cover">
            <Drawer 
                id="temp-drawer-cover"
                className="drawer-cover"
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: media.matches? "block":"none",
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <DrawerListComponent dashboardRouteProps={dashboardRouteProps} handleDrawerToggle={handleDrawerToggle} />
                <h2>Temporary drawer</h2>
            </Drawer>
            <Drawer 
                id="perm-drawer-cover"
                className="drawer-cover"
                variant="permanent"
                sx={{
                    display: media.matches? "none":"block",
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                <DrawerListComponent dashboardRouteProps={dashboardRouteProps} handleDrawerToggle={handleDrawerToggle} />
            </Drawer>
        </Box>
    )
}

