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
                        icon: "/images/side-drawer/user-friends.png",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/customers/guarantors",
                        name: "Guarantors",
                        icon: "/images/side-drawer/users-guaran.png",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/customers/loans",
                        name: "Loans",
                        icon: "/images/side-drawer/sack.png",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/customers/decision-models",
                        name: "Decision Models",
                        icon: "/images/side-drawer/handshake.png",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/customers/savings",
                        name: "Savings",
                        icon: "/images/side-drawer/piggy-bank.png",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/customers/loan-requests",
                        name: "Loan Requests",
                        icon: "/images/side-drawer/loan-request.png",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/customers/whitelist",
                        name: "Whitelist",
                        icon: "/images/side-drawer/user-check.png",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/customers/karma",
                        name: "Karma",
                        icon: "/images/side-drawer/user-times.png",
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
                        icon: "/images/side-drawer/briefcase.png",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/businesses/loan-products",
                        name: "Loan Products",
                        icon: "/images/side-drawer/sack.png",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/businesses/savings-products",
                        name: "Savings Products",
                        icon: "/images/side-drawer/savings-prod.png",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/businesses/fees-and-charges",
                        name: "Fees and Charges",
                        icon: "/images/side-drawer/coins-stack.png",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/businesses/transactions",
                        name: "Transactions",
                        icon: "/images/side-drawer/transactions.png",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/businesses/services",
                        name: "Services",
                        icon: "/images/side-drawer/galaxy.png",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/businesses/service-account",
                        name: "Service Account",
                        icon: "/images/side-drawer/user-cog.png",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/businesses/settlements",
                        name: "Settlements",
                        icon: "/images/side-drawer/scroll.png",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/businesses/reports",
                        name: "Reports",
                        icon: "/images/side-drawer/chart-bar.png",
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
                        icon: "/images/side-drawer/sliders.png",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/settings/fees-and-pricing",
                        name: "Fees and Pricing",
                        icon: "/images/side-drawer/badge-percent.png",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                    {
                        url: "/dashboard/settings/audit-logs",
                        name: "Audit Logs",
                        icon: "/images/side-drawer/clipboard-list.png",
                        component: () => <AuthController dashboardRouteProps={Routes.find(route => route.name === "Dashboard")} />
                    },
                ]
            }
        ]
    }
]