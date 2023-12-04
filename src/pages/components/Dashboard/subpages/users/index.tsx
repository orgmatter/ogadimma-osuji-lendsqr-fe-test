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

    const usersState:UserProps = useSelector(({usersState}) => usersState);
    
    const dispatch = useDispatch<any>();
    
    const currLocation = useLocation();
    const subpage = subpagesData.find(subpageData => subpageData.url === currLocation.pathname);
    const { setUserDetails, setStorageData } = useStorage();

    // const [users, setUsers] = useState<UserProps>(usersState);
    // console.log("users: ", usersState)

    const [subpageUrl, setSubpageUrl] = useState(subpage?.url);

    const handleShowUserDetailsPage = (event: React.MouseEvent<HTMLButtonElement>, tRowData: TableRowData, tableMenuItemType: string) => {
        const { userDetails } = tRowData;
        setUserDetails(userDetails);

        setSubpageUrl(tableMenuItemType)
    }

    const totalUsers = usersState.data.length;
    // alert(totalState)
    const totalActiveUsers = usersState.data.filter((user) => user.status === "active").length;
    const totalUsersWithLoans = usersState.data.filter((user) => user.isLoans === true).length;
    const totalUsersWithSavings = usersState.data.filter((user) => user.isSavings === true).length;

    const userCardProps = {
        totalUsers,
        totalActiveUsers,
        totalUsersWithLoans,
        totalUsersWithSavings
    }

    useEffect(() => {

        dispatch(UsersAction());
        const tableDataParam = {
            key: "tableData",
            value: JSON.stringify(usersState.data)
        }
        setStorageData(tableDataParam);

    }, [dispatch]);

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
                                <UsersTable 
                                    tableData={usersState.data} 
                                    eventType={usersState.eventType}
                                    handleShowUserDetailsPage={handleShowUserDetailsPage} 
                                />
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