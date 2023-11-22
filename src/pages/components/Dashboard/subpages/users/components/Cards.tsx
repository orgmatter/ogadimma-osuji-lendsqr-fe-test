import React from "react";
import { Paper, Card } from "@mui/material";
import { Images } from "../../../../../../images";

type UserCardProps = {
    userCardProps: {
        totalUsers: number
        totalActiveUsers: number
        totalUsersWithLoans: number
        totalUsersWithSavings: number
    }
}

export default function UserCards(props: UserCardProps) {

    const { userCardProps } = props;

    const { dashboard } = Images;

    return (
        <div className="card-cover-flex">
            <div className="card-cover-item">
                <Card className="card-cover">
                    <div className="card-inner-cover">
                        <div className="card-icon-cover">
                            <div className="icon-cover">
                                <img className="icon-img" src={dashboard.users.cards.icon1} alt="card icon" />
                            </div>
                        </div>
                        <div className="card-name-cover">
                            <div className="name-cover">
                                USERS
                            </div>
                        </div>
                        <div className="card-value-cover">
                            <div className="value-cover">
                                {userCardProps.totalUsers}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="card-cover-item">
                <Card className="card-cover">
                    <div className="card-inner-cover">
                        <div className="card-icon-cover">
                            <div className="iCON-cover">
                                <img className="icon-img" src={dashboard.users.cards.icon2} alt="card icon" />
                            </div>
                        </div>
                        <div className="card-name-cover">
                            <div className="name-cover">
                                ACTIVE USERS
                            </div>
                        </div>
                        <div className="card-value-cover">
                            <div className="value-cover">
                                {userCardProps.totalActiveUsers}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="card-cover-item">
                <Card className="card-cover">
                    <div className="card-inner-cover">
                        <div className="card-icon-cover">
                            <div className="icon-cover">
                                <img className="icon-img" src={dashboard.users.cards.icon3} alt="card icon" />
                            </div>
                        </div>
                        <div className="card-name-cover">
                            <div className="name-cover">
                                USERS WITH LOANS
                            </div>
                        </div>
                        <div className="card-value-cover">
                            <div className="value-cover">
                                {userCardProps.totalUsersWithLoans}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="card-cover-item">
                <Card className="card-cover">
                    <div className="card-inner-cover">
                        <div className="card-icon-cover">
                            <div className="icon-cover">
                                <img className="icon-img" src={dashboard.users.cards.icon4} alt="card icon" />
                            </div>
                        </div>
                        <div className="card-name-cover">
                            <div className="name-cover">
                                USERS WITH SAVINGS
                            </div>
                        </div>
                        <div className="card-value-cover">
                            <div className="value-cover">
                                {userCardProps.totalUsersWithSavings}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}