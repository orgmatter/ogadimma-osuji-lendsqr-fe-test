import React from "react";
import { UserDetailsProps } from "../../../../../../types/dashboard";
import useStorage from "../../../../../../hooks/useStorage";
import UserDetailTabs from "./components/user-detail-tabs";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function UserDetails() {

    const { getUserDetails } = useStorage();

    const userDetails:UserDetailsProps = getUserDetails();
    const { header, content } = userDetails;
    
    return (
        <div className="user-details-cover-flex">
            <div className="user-details-cover-item">
                <div className="page-header-cover-flex">
                    <div className="page-header-cover-item">
                        <div className="header-link-cover-flex">
                            <div className="header-link-cover-item">
                                <div className="back-link-btn-cover">
                                    <Button
                                        type="button"
                                        className="back-link-btn"
                                        href="/dashboard/customers/users"
                                    ><KeyboardBackspaceIcon /> &nbsp; Back To Users</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-header-cover-item">
                        <div className="header-desc-cover-flex">
                            <div className="header-desc-cover-item">
                                <h2 className="desc-text">Users Details</h2>
                            </div>
                            <div className="header-desc-cover-item">
                                <div className="header-desc-btn-cover-flex">
                                    <div className="header-desc-btn-cover-item">
                                        <Button
                                            type="button"
                                            className="desc-btn desc-btn-blacklisted"
                                            variant="outlined"
                                            href="/dashboard/customers/users"
                                        >BLACKLIST USER</Button>
                                    </div>
                                    <div className="header-desc-btn-cover-item">
                                        <Button
                                            type="button"
                                            className="desc-btn desc-btn-activate"
                                            variant="outlined"
                                            href="/dashboard/customers/users"
                                        >ACTIVATE USER</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-content-cover-flex">
                    <div className="page-content-cover-item">
                        <UserDetailTabs header={header} content={content} />
                    </div>
                </div>
            </div>
        </div>
    )
}