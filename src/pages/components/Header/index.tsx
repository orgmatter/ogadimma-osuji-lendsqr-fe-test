import React,{} from "react";
import AppBarComponent from "./AppBarComponent";
import { HeaderCompProps } from "../../../types/header-comp";

export default function HeaderComponent(props: HeaderCompProps) {

    const { appBarProps } = props;
    
    return (
        <div className="header-cover-flex">
            <div className="header-cover-item">
                <AppBarComponent 
                    drawerWidth={appBarProps.drawerWidth} 
                    handleDrawerToggle={appBarProps.handleDrawerToggle}
                />
            </div>
        </div>
    )
}