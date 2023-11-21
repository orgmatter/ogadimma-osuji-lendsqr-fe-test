import React, {useState} from "react";
import { 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText,
    Button,
    Menu,
    MenuItem,
    Toolbar,
    Divider
} from "@mui/material";
import { KeyboardArrowDown, VerifiedUser } from "@mui/icons-material";
import { DrawerListCompProps } from "../../../types/side-drawer-comp";

export default function DrawerListComponent(props: DrawerListCompProps) {

    const { dashboardRouteProps } = props

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        setMenuOpen(prev => !prev)
    }
    const handleMenuClose = () => {
        setMenuOpen(false);
    }
    const handleMenuSelect = () => {
        setMenuOpen(false);
    }

    const customerRoutes = dashboardRouteProps?.dashboardRoutes.find(dashboardRoute => dashboardRoute.title === "CUSTOMERS");
    const businessRoutes = dashboardRouteProps?.dashboardRoutes.find(dashboardRoute => dashboardRoute.title === "BUSINESSES");
    const settingRoutes = dashboardRouteProps?.dashboardRoutes.find(dashboardRoute => dashboardRoute.title === "SETTINGS");
    
    console.log("settings props", settingRoutes);
    
    const customerListItem = (
        <>
            {
                customerRoutes?.routes.map((customerRoute, index) => (
                    <ListItem className="list-item-cover" key={index}>
                        <ListItemButton className="list-item-btn-cover list-item-btn-cover-active">
                            <ListItemIcon className="list-item-icon-cover">
                                <VerifiedUser />
                            </ListItemIcon>
                            <ListItemText className="list-item-text-cover">
                                {customerRoute.name}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </>
    );

    const businessListItem = (
        <>
            {
                businessRoutes?.routes.map((businessRoute, index) => (
                    <ListItem className="list-item-cover" key={index}>
                        <ListItemButton className="list-item-btn-cover">
                            <ListItemIcon>
                                <VerifiedUser />
                            </ListItemIcon>
                            <ListItemText className="list-item-text-cover">
                                {businessRoute.name}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </>
    );

    const settingListItem = (
        <>
            {
                settingRoutes?.routes.map((settingRoute, index) => (
                    <ListItem className="list-item-cover" key={index}>
                        <ListItemButton className="list-item-btn-cover">
                            <ListItemIcon>
                                <VerifiedUser />
                            </ListItemIcon>
                            <ListItemText className="list-item-text-cover">
                                {settingRoute.name}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </>
    );
    
    return (
        <div className="drawer-list-comp-cover-flex">
            <div className="drawer-list-comp-cover-item">
                <Toolbar />
                <Divider />
                <div className="list-header-cover-flex">
                    <div className="list-header-cover-item">
                        <div className="header1-cover">
                            <Button
                                className="list-header-btn"
                                type="button"
                                onClick={handleMenuOpen}
                            >
                                Switch Organisation <KeyboardArrowDown />
                            </Button>
                            <Menu
                                className="list-header-menu"
                                open={menuOpen}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={handleMenuSelect}>Lendsqr</MenuItem>
                                <MenuItem onClick={handleMenuSelect}>Irorun</MenuItem>
                            </Menu>
                        </div>
                        <div className="header2-cover">
                            <h2 className="page-name-text">{dashboardRouteProps?.name}</h2>
                        </div>
                    </div>
                </div>
                <List className="list-cover">
                    <div className="list-item-title-cover-flex">
                        <div className="list-item-title-cover-item">
                            { customerRoutes?.title }
                        </div>
                    </div>
                    <div className="list-item-main-cover">
                        { customerListItem }
                    </div>
                </List>
                <List className="list-cover">
                    <div className="list-item-title-cover-flex">
                        <div className="list-item-title-cover-item">
                            { businessRoutes?.title }
                        </div>
                    </div>
                    <div className="list-item-main-cover">
                        { businessListItem }
                    </div>
                </List>
                <List className="list-cover">
                    <div className="list-item-title-cover-flex">
                        <div className="list-item-title-cover-item">
                            { settingRoutes?.title }
                        </div>
                    </div>
                    <div className="list-item-main-cover">
                        { settingListItem }
                    </div>
                </List>
            </div>
        </div>
    )
}