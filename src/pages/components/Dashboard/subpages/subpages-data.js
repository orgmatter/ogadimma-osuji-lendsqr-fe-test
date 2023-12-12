import Users from "./users";
import DecisionModels from "./decision-models";
import Guarantors from "./guarantors";
import Karma from "./karma";
import LoanRequests from "./loan-requests";
import Loans from "./loans";
import Savings from "./savings";
import Whitelist from "./whitelist";
import UserDetails from "./users/user-details";

//--> this is a list of all subpages link in dashboard side drawer
export const subpagesData = [
    {
        url: "/dashboard/customers/users",
        name: "Users",
        component: () => <Users />
    },
    {
        url: "/dashboard/customers/guarantors",
        name: "Guarantors",
        component: () => <Guarantors />
    },
    {
        url: "/dashboard/customers/loans",
        name: "Loans",
        component: () => <Loans />
    },
    {
        url: "/dashboard/customers/decision-models",
        name: "Decision Models",
        component: () => <DecisionModels />
    },
    {
        url: "/dashboard/customers/savings",
        name: "Savings",
        component: () => <Savings/>
    },
    {
        url: "/dashboard/customers/loan-requests",
        name: "Loan Requests",
        component: () => <LoanRequests />
    },
    {
        url: "/dashboard/customers/whitelist",
        name: "Whitelist",
        component: () => <Whitelist />
    },
    {
        url: "/dashboard/customers/karma",
        name: "Karma",
        component: () => <Karma />
    },
    {
        url: "/dashboard/businesses/organisation",
        name: "Organisation",
        component: () => ""
    },
    {
        url: "/dashboard/businesses/loan-products",
        name: "Loan Products",
        component: () => ""
    },
    {
        url: "/dashboard/businesses/savings-products",
        name: "Savings Products",
        component: () => ""
    },
    {
        url: "/dashboard/businesses/fees-and-charges",
        name: "Fees and Charges",
        component: () => ""
    },
    {
        url: "/dashboard/businesses/transactions",
        name: "Transactions",
        component: () => ""
    },
    {
        url: "/dashboard/businesses/services",
        name: "Services",
        component: () => ""
    },
    {
        url: "/dashboard/businesses/service-account",
        name: "Service Account",
        component: () => ""
    },
    {
        url: "/dashboard/businesses/settlements",
        name: "Settlements",
        component: () => ""
    },
    {
        url: "/dashboard/businesses/reports",
        name: "Reports",
        component: () => ""
    },
    {
        url: "/dashboard/settings/preferences",
        name: "Preferences",
        component: () => ""
    },
    {
        url: "/dashboard/settings/fees-and-pricing",
        name: "Fees and Pricing",
        component: () => ""
    },
    {
        url: "/dashboard/settings/audit-logs",
        name: "Audit Logs",
        component: () => ""
    },
    {
        url: "/dashboard/customers/users/user-details",
        name: "User Details",
        component: () => <UserDetails />
    }
]