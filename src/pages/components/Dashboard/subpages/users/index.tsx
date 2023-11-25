import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { UsersAction } from "../../../../../store/actions/users-action";
import UserCards from "./components/UserCards";
import UsersTable from "./components/UsersTable";
import { UserProps } from "../../../../../types/dashboard";
import { mockyDemo as MOCKY_DEMO } from "./mocky-demo";


export default function Users() {

    const usersState = useSelector(({usersState}) => usersState);
    const dispatch = useDispatch();

    const [users, setUsers] = useState<UserProps | null>(usersState);

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

    // useEffect(() => {

    //     dispatch

    // }, [users]);
    
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
                        <UsersTable tableData={MOCKY_DEMO.users} />
                    </div>
                </div>
            </div>
        </div>
    )
}