import React from "react";
import { UserDetailsProps } from "../../../../../../types/dashboard";
import useStorage from "../../../../../../hooks/useStorage";
import UserDetailsHeader from "./components/header";
import UserDetailsContent from "./components/content";

export default function UserDetails() {

    const { getUserDetails } = useStorage();

    const userDetails:UserDetailsProps = getUserDetails();
    const { header, content } = userDetails;

    return (
        <div className="user-details-cover-flex">
            <div className="user-details-cover-item">
                <UserDetailsHeader header={header} />
                <UserDetailsContent content={content} />
            </div>
        </div>
    )
}