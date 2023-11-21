import React from "react";
import { Drawer, Box } from "@mui/material";
import DrawerListComponent from "./DrawerListComponent";
import { DrawerProps } from "../../../types/side-drawer-comp";

export default function DrawerComponent(props: DrawerProps) {

    const { drawerWidth, mobileOpen, handleDrawerToggle, dashboardRouteProps } = props;
    
    return (
        <Box className="box-cover">
            <Drawer 
                id="temp-drawer-cover"
                className="drawer-cover"
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <DrawerListComponent dashboardRouteProps={dashboardRouteProps} />
            </Drawer>
            <Drawer 
                id="perm-drawer-cover"
                className="drawer-cover"
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                <DrawerListComponent dashboardRouteProps={dashboardRouteProps} />
            </Drawer>
        </Box>
    )
}

