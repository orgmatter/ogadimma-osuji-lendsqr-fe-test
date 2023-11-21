export type Status = {
    isActivate: boolean,
    isBlacklisted: boolean
}

export type Users = {
    id: string,
    organisation: string,
    username: string,
    phoneno: number,
    date: string,
    status: Status
}

export type UserDetails = {
    id: string,
    userTier: number,
    generalDetails: {
        personalInfo: {
            fullname: string,
        }
    }
}

export type UserProps = {
    users: Users
}

export type UserDetailsProps = {

}

export type DashboardRouteProps = {
    url: string,
    name: string,
    dashboardRoutes: {
        title: string
        routes: {
            name: string
            icon?: ""
        }[]
    }[]
}

export type DashboardPageProps = {
    dashboardRouteProps: DashboardRouteProps
    dashboardCompProps: DashboardCompProps
}

export type DashboardCompProps = {
    drawerWidth?: number
    window?: () => Window
    dashboardRouteProps: DashboardRouteProps
}