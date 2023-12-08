import React, {useState} from "react";
import { 
    AppBar, 
    Toolbar, 
    IconButton, 
    TextField, 
    Button,
    InputAdornment, 
    Avatar,
    Menu,
    MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationBellIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { AppBarProps } from "../../../types/header-comp";
import { Images } from "../../../images";
import useAuth from "../../../hooks/useAuth";
import { useLocation } from "react-router";
import { useMedia } from "../../../hooks/useMedia";

export default function AppBarComponent(props: AppBarProps) {

    const { drawerWidth, handleDrawerToggle } = props;

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const menuOpen = Boolean(anchorEl);

    const { logout, isLogin, getAdmin } = useAuth();

    const location = useLocation();

    const { media } = useMedia("(max-width: 680.20px)");

    const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const handleLogout = () => {
        logout("admin");
        if(!isLogin()) {
            window.location.assign('/');
        }
    }
    
    return (
        <AppBar 
            className="appbar-cover"
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                zIndex: {sm: 9999}
            }}
        >
            <Toolbar className="toolbar-cover-flex">
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
                <div className="toolbar-content-cover-flex">
                    <div className="toolbar-content-cover-item">
                        <div className="content1-cover-flex">
                            <div className="content1-cover-item">
                                <div className="logo-cover-flex">
                                    <div className="logo-cover-item">
                                        <img className="logo-img" src={Images.central.logo} alt="lendsqr img" />
                                    </div>
                                </div>
                            </div>
                            <div className="content1-cover-item">
                                <div className="search-bar-cover-flex">
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
                            </div>
                        </div>
                    </div>
                    <div className="toolbar-content-cover-item">
                        <div className="content2-cover-flex">
                            <div className="content2-cover-item">
                                <div className="docs-cover">
                                    <a className="docs-link" href="#">Docs</a>
                                </div>
                            </div>
                            <div className="content2-cover-item">
                                <div className="notif-cover">
                                    <NotificationBellIcon className="notif-bell-icon" />
                                </div>
                            </div>
                            <div className="content2-cover-item">
                                <div className="avatar-name-cover-flex">
                                    <div className="avatar-name-cover-item">
                                        <div className="avatar-div-cover">
                                            <Avatar className="avatar-cover">
                                                <img className="avatar-img" src={Images.header.avatarImg} alt="avatar img" />
                                            </Avatar>
                                        </div>
                                    </div>
                                    <div className="avatar-name-cover-item">
                                        <div className="name-arrow-btn-cover">
                                            <Button 
                                                className="name-arrow-btn"
                                                id="basic-button"
                                                aria-controls={menuOpen ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={menuOpen ? 'true' : undefined}
                                                onClick={handleMenuClick}
                                            >
                                                {getAdmin()?.firstname? getAdmin()?.firstname: "Adedeji"} <ArrowDropDownIcon />
                                            </Button>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={menuOpen}
                                                onClose={handleMenuClose}
                                                MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                                }}
                                                sx={{
                                                    zIndex: 9999
                                                }}
                                            >
                                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                            </Menu>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}
