import { DashboardRouteProps } from "./dashboard"
export type DrawerProps = {
    drawerWidth: number | undefined
    window?: () => Window
    mobileOpen?: boolean
    handleDrawerToggle: () => void
    dashboardRouteProps?: DashboardRouteProps | undefined
}

export type SideDrawerCompProps = {
    sideDrawerCompProps: DrawerProps
    
}

export type DrawerListCompProps = {
    dashboardRouteProps: DashboardRouteProps | undefined
}