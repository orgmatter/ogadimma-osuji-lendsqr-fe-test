import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { UsersAction } from "../../../../../store/actions/users-action";
import UserCards from "./components/UserCards";
import UsersTable from "./components/UsersTable";
import { UserProps } from "../../../../../types/dashboard";
import { mockyDemo as MOCKY_DEMO } from "./mocky-demo";
import { subpagesData } from "../subpages-data";
import { useLocation } from "react-router";
import { TableRowData } from "../../../../../types/dashboard";
import useStorage from "../../../../../hooks/useStorage";
import UserDetails from "./user-details";


export default function Users() {

    const usersState = useSelector(({usersState}) => usersState);
    const dispatch = useDispatch<any>();
    
    const currLocation = useLocation();
    const subpage = subpagesData.find(subpageData => subpageData.url === currLocation.pathname);
    const { setUserDetails } = useStorage();

    const [users, setUsers] = useState<UserProps | null>(usersState);

    const [subpageUrl, setSubpageUrl] = useState(subpage?.url);

    const handleShowUserDetailsPage = (event: React.MouseEvent<HTMLButtonElement>, tRowData: TableRowData, tableMenuItemType: string) => {
        const { userDetails } = tRowData;
        setUserDetails(userDetails);

        setSubpageUrl(tableMenuItemType)
    }

    console.log("users: ", users)

    const sliceUsers = MOCKY_DEMO.users.slice(0,10);
    const totalUsers = sliceUsers.length;
    const totalActiveUsers = sliceUsers.filter((users) => users.status === "active").length;
    const totalUsersWithLoans = sliceUsers.filter((users) => users.isLoans === true).length;
    const totalUsersWithSavings = sliceUsers.filter((users) => users.isSavings === true).length;

    const userCardProps = {
        totalUsers,
        totalActiveUsers,
        totalUsersWithLoans,
        totalUsersWithSavings
    }

    useEffect(() => {

        dispatch(UsersAction());

    }, [users]);

    switch(subpageUrl) {
        case "/dashboard/customers/users":
            return (
                <div className="users-cover-flex">
                    <div className="users-cover-item">
                        <div className="users-header-cover-flex">
                            <div className="users-header-cover-item">
                                <h2 className="users-header-text">Users</h2>
                            </div>
                        </div>
                        <div className="users-cards-cover-flex">
                            <div className="users-cards-cover-item">
                                <UserCards userCardProps={userCardProps} />
                                <UsersTable tableData={MOCKY_DEMO.users} handleShowUserDetailsPage={handleShowUserDetailsPage} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        case "view_details":
            return (
                <UserDetails />
            )
        default:
            return
    }
}