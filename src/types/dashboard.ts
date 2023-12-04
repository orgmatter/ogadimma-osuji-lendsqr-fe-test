export type Status = {
    isActivate: boolean,
    isBlacklisted: boolean
}

export type UserDetailsProps = {
    header: {
        fullname: string
        id: string
        userTier: number
        monthlyIncome: string
        bankName: string
        accountNumber: string
    },
    content: {
        generalDetails: {
            personalInfo: {
                fullname: string
                phoneno: string
                email: string
                bvn: string
                gender: string
                maritalStatus: string
                children: string
                typeOfResidence: string
            },
            educationAndEmployment: {
                educationLevel: string
                employmentStatus: string
                employmentSector: string
                employmentDuration: string
                officeEmail: string
                monthlyIncomeRange: {
                    from: string
                    to: string
                },
                loanRepayment: string
            },
            socials: {
                twitter: string
                facebook: string
                instagram: string 
            },
            guarantors: {
                fullname: string
                phoneno: string
                emailAddress: string
                relationship: string
            }[]
        }
    }
}

export type UserProps = {
    status: string
    eventType: string
    msg: string
    data: {
        id: string
        organisation: string
        username: string
        email: string
        phoneno: string
        isLoans: boolean
        isSavings: boolean
        dateJoined: string
        status: string
        userDetails: UserDetailsProps
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
        userDetails: UserDetailsProps
    }[],
    eventType: string
    handleShowUserDetailsPage: (event: React.MouseEvent<HTMLButtonElement>, tRowData: TableRowData, tableMenuItemType: string) => void
}

export type TableRowData = {
    id: string
    organisation: string
    username: string
    email: string
    phoneno: string
    isLoans: boolean
    isSavings: boolean
    dateJoined: string
    status: string
    userDetails: UserDetailsProps
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