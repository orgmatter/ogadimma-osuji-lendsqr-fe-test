import React, { useState } from "react";
import { useRoutes, useLocation, useMatches } from "react-router";
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
    Divider,
    IconButton,
    TextField,
    InputAdornment
} from "@mui/material";
import { KeyboardArrowDown, VerifiedUser } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { DrawerListCompProps } from "../../../types/side-drawer-comp";
import { useMedia } from "../../../hooks/useMedia";
import { Images } from "../../../images";

export default function DrawerListComponent(props: DrawerListCompProps) {

    const { dashboardRouteProps, handleDrawerToggle } = props

    const [menuOpen, setMenuOpen] = useState(false);
    const currLocation = useLocation();

    const { media } = useMedia("(max-width: 680.20px)");

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
    
    const customerListItem = (
        <>
            {
                customerRoutes?.routes.map((customerRoute, index) => (
                    <ListItem className="list-item-cover" key={index}>
                        <ListItemButton 
                            className={`list-item-btn-cover ${customerRoute.url === currLocation.pathname? 'list-item-btn-cover-active':''}`}
                            href={customerRoute.url}
                        >
                            <ListItemIcon className="list-item-icon-cover">
                                <VerifiedUser className="list-item-icon" />
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
                        <ListItemButton 
                            className={`list-item-btn-cover ${businessRoute.url === currLocation.pathname? 'list-item-btn-cover-active':''}`}
                            href={businessRoute.url}
                        >
                            <ListItemIcon className="list-item-icon-cover">
                                <VerifiedUser className="list-item-icon" />
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
                        <ListItemButton 
                            className={`list-item-btn-cover ${settingRoute.url === currLocation.pathname? 'list-item-btn-cover-active':''}`}
                            href={settingRoute.url}
                        >
                            <ListItemIcon className="list-item-icon-cover">
                                <VerifiedUser className="list-item-icon" />
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
                <Toolbar>
                {/* <Divider /> */}
                    <IconButton
                        className="header-drawer-btn"
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: media.matches?"block":"none" }}
                    >
                        <MenuIcon className="header-menu-icon" />
                    </IconButton>
                    <div className="logo-cover-flex">
                        <div className="logo-cover-item">
                            <img className="logo-img" src={Images.central.logo} alt="lendsqr logo" />
                        </div>
                    </div>
                </Toolbar>
                <Toolbar className="search-toolbar-cover">
                    <div className="drawer-search-bar-cover-flex">
                        <div className="search-bar-cover-item">
                            <TextField
                                type="text"
                                className="search-input"
                                value={""}
                                name="search"
                                placeholder="Search for anything"
                                fullWidth
                                InputProps={{
                                    endAdornment: 
                                    <InputAdornment className="input-adorn-cover" position="end">
                                        <Button
                                            className="search-btn"
                                            type="button"
                                            variant="contained"
                                            color="primary"
                                        >
                                            <SearchIcon className="search-icon" />
                                        </Button>
                                    </InputAdornment>
                                }}
                            />
                        </div>
                    </div>
                </Toolbar>
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