export type Status = {
    isActivate: boolean,
    isBlacklisted: boolean
}

export type UserDetails = {
    id: string
    userTier: number
    generalDetails: {
        personalInfo: {
            fullname: string
        }
    }
}

export type UserProps = {
    status: string
    msg: string
    data: {
        id: string
        organisation: string
        username: string
        email: string
        phoneno: number
        isLoans: boolean
        isSavings: boolean
        date: string
        status: Status
    }[]
}

export type UserTableProps = {
    tableData: {
        id: string
        organisation: string
        username: string
        email: string
        phoneno: string
        isLoans: boolean
        isSavings: boolean
        dateJoined: string
        status: string
    }[]
}

export type UserDetailsProps = {

}

export type DashboardRouteProps = {
    url: string
    name: string
    dashboardRoutes: {
        title: string
        routes: {
            url: string
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