import AuthController from "../pages/auth-controller";
import LoginPage from "../pages/LoginPage";

export const Routes = [
    {
        url: "/",
        name: "Login",
        component: (props) => <LoginPage {...props} />
    },
    {
        url: "/dashboard",
        name: "Dashboard",
        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />,
        dashboardRoutes: [
            {
                title: "CUSTOMERS",
                routes: [
                    {
                        url: "/dashboard/customers/users",
                        name: "Users",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/customers/users/user-details",
                        name: "User Details",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/customers/guarantors",
                        name: "Guarantors",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/customers/loans",
                        name: "Loans",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/customers/decision-models",
                        name: "Decision Models",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/customers/savings",
                        name: "Savings",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/customers/loan-requests",
                        name: "Loan Requests",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/customers/whitelist",
                        name: "Whitelist",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/customers/karma",
                        name: "Karma",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                ]
            },
            {
                title: "BUSINESSES",
                routes: [
                    {
                        url: "/dashboard/businesses/organisation",
                        name: "Organisation",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/businesses/loan-products",
                        name: "Loan Products",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/businesses/savings-products",
                        name: "Savings Products",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/businesses/fees-and-charges",
                        name: "Fees and Charges",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/businesses/transactions",
                        name: "Transactions",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/businesses/services",
                        name: "Services",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/businesses/service-account",
                        name: "Service Account",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/businesses/settlements",
                        name: "Settlements",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/businesses/reports",
                        name: "Reports",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                ]
            },
            {
                title: "SETTINGS",
                routes: [
                    {
                        url: "/dashboard/settings/preferences",
                        name: "Preferences",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/settings/fees-and-pricing",
                        name: "Fees and Pricing",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/settings/audit-logs",
                        name: "Audit Logs",
                        icon: "",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                ]
            }
        ]
    }
]