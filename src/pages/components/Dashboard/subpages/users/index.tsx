import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCards from "./components/Cards";

export default function Users() {

    const userCardProps = {
        totalUsers: 2453,
        totalActiveUsers: 2453,
        totalUsersWithLoans: 12453,
        totalUsersWithSavings: 102453
    }
    
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
                    </div>
                </div>
            </div>
        </div>
    )
}