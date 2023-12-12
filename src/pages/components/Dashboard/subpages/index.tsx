import React, {} from "react";
import { subpagesData as SUBPAGES_DATA } from "./subpages-data";
import { useLocation } from "react-router";

export default function DashboardSubpages() {

    const location = useLocation();

    //--> get the properties of the subpage when the url is active
    const subpagesObj = SUBPAGES_DATA.find(subpage => subpage.url === location.pathname);

    const subpageComp = subpagesObj? subpagesObj.component(): (
        <div className="no-users-cover">No Users</div>
    )
    
    return (
        <div className="dashboard-subpages-cover-flex">
            <div className="dashboard-subpages-cover-item">
                { subpageComp }
            </div>
        </div>
    )
}