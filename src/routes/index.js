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
                        icon: ""
                    },
                    {
                        url: "/dashboard/customers/guarantors",
                        name: "Guarantors",
                        icon: ""
                    },
                    {
                        url: "/dashboard/customers/loans",
                        name: "Loans",
                        icon: ""
                    },
                    {
                        url: "/dashboard/customers/decision-models",
                        name: "Decision Models",
                        icon: ""
                    },
                    {
                        url: "/dashboard/customers/savings",
                        name: "Savings",
                        icon: ""
                    },
                    {
                        url: "/dashboard/customers/loan-requests",
                        name: "Loan Requests",
                        icon: ""
                    },
                    {
                        url: "/dashboard/customers/whitelist",
                        name: "Whitelist",
                        icon: ""
                    },
                    {
                        url: "/dashboard/customers/karma",
                        name: "Karma",
                        icon: ""
                    },
                ]
            },
            {
                title: "BUSINESSES",
                routes: [
                    {
                        url: "/dashboard/businesses/organisation",
                        name: "Organisation",
                        icon: ""
                    },
                    {
                        url: "/dashboard/businesses/loan-products",
                        name: "Loan Products",
                        icon: ""
                    },
                    {
                        url: "/dashboard/businesses/savings-products",
                        name: "Savings Products",
                        icon: ""
                    },
                    {
                        url: "/dashboard/businesses/fees-and-charges",
                        name: "Fees and Charges",
                        icon: ""
                    },
                    {
                        url: "/dashboard/businesses/transactions",
                        name: "Transactions",
                        icon: ""
                    },
                    {
                        url: "/dashboard/businesses/services",
                        name: "Services",
                        icon: ""
                    },
                    {
                        url: "/dashboard/businesses/service-account",
                        name: "Service Account",
                        icon: ""
                    },
                    {
                        url: "/dashboard/businesses/settlements",
                        name: "Settlements",
                        icon: ""
                    },
                    {
                        url: "/dashboard/businesses/reports",
                        name: "Reports",
                        icon: ""
                    },
                ]
            },
            {
                title: "SETTINGS",
                routes: [
                    {
                        url: "/dashboard/settings/preferences",
                        name: "Preferences",
                        icon: ""
                    },
                    {
                        url: "/dashboard/settings/fees-and-pricing",
                        name: "Fees and Pricing",
                        icon: ""
                    },
                    {
                        url: "/dashboard/settings/audit-logs",
                        name: "Audit Logs",
                        icon: ""
                    },
                ]
            }
        ]
    }
]