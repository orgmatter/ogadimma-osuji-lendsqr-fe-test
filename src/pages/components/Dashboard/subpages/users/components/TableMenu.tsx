import React from "react";
import { MenuList, MenuItem, Menu, Paper } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function TableMenu(props: any) {

    const { 
        tableMenuId, 
        handleMenuItemClick, 
        handleTableMenuClose, 
        indexKey, 
        menuId, 
        tData,
        anchorEl,
        tableMenuOpen,
        handleShowUserDetailsPage
    } = props;
    
    return (
        <div className="table-menu-cover" key={indexKey}>
            <Menu
                id={menuId}
                className="menu-cover"
                anchorEl={anchorEl}
                open={tableMenuId === menuId}
                onClose={handleTableMenuClose}
                
            >
                <MenuItem 
                    className="menu-item-cover"
                    onClick={(event) => handleShowUserDetailsPage(event, tData, "view_details")}
                >
                    <VisibilityIcon /> View Details
                </MenuItem>
                <MenuItem 
                    className="menu-item-cover"
                    onClick={(event) => handleMenuItemClick(event, tData, "blacklist_user")}
                >
                    <PersonOffIcon /> Blacklist User
                </MenuItem>
                <MenuItem 
                    className="menu-item-cover"
                    onClick={(event) => handleMenuItemClick(event, tData, "activate_user")}
                >
                    <PersonAddIcon /> Activate User
                </MenuItem>
            </Menu>
        </div>
    )
}