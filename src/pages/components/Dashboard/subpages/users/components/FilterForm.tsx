import React from "react";
import { Paper, TextField, Button } from "@mui/material";

export default function FilterForm(props: any) {

    const { filterFormType, filterForm } = props

    switch(filterFormType) {

        case "organisation":
            return (
                <Paper 
                    className="paper-cover"
                    style={{
                        display: filterForm.isOrgFilterFormOpen?"block":"none"
                    }}
                >
                    <div className="filter-cover-flex">
                        <div className="filter-cover-item">
                            <div className="form-cover-flex">
                                <div className="form-cover-item">
                                    <label htmlFor="org">Status</label>
                                    <select className="filter-input" id="org">
                                        <option value="">Select</option>
                                    </select>
                                </div>
                            </div>
                            <div className="btn-cover-flex">
                                <div className="btn-cover-item">
                                    <Button>Reset</Button>
                                </div>
                                <div className="btn-cover-item">
                                    <Button>Filter</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            )
        case "status":
            return (
                <Paper 
                    className="paper-cover"
                    style={{
                        display: filterForm.isStatusFilterFormOpen?"block":"none"
                    }}
                >
                    <div className="filter-cover-flex">
                        <div className="filter-cover-item">
                            <div className="form-cover-flex">
                                <div className="form-cover-item">
                                    <label htmlFor="status">Status</label>
                                    <select className="filter-input" id="status">
                                        <option value="">Select</option>
                                    </select>
                                </div>
                            </div>
                            <div className="btn-cover-flex">
                                <div className="btn-cover-item">
                                    <Button>Reset</Button>
                                </div>
                                <div className="btn-cover-item">
                                    <Button>Filter</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            )
        case "username":
            return (
                <Paper 
                    className="paper-cover"
                    style={{
                        display: filterForm.isUsernameFilterFormOpen?"block":"none"
                    }}
                >
                    <div className="filter-cover-flex">
                        <div className="filter-cover-item">
                            <div className="form-cover-flex">
                                <div className="form-cover-item">
                                    <label htmlFor="username">Username</label>
                                    <input className="filter-input" id="username" type="text" />
                                </div>
                            </div>
                            <div className="btn-cover-flex">
                                <div className="btn-cover-item">
                                    <Button>Reset</Button>
                                </div>
                                <div className="btn-cover-item">
                                    <Button>Filter</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            )
        case "email":
            return (
                <Paper 
                    className="paper-cover"
                    style={{
                        display: filterForm.isEmailFilterFormOpen?"block":"none"
                    }}
                >
                    <div className="filter-cover-flex">
                        <div className="filter-cover-item">
                            <div className="form-cover-flex">
                                <div className="form-cover-item">
                                    <label htmlFor="email">Email</label>
                                    <input className="filter-input" id="email" type="email" />
                                </div>
                            </div>
                            <div className="btn-cover-flex">
                                <div className="btn-cover-item">
                                    <Button>Reset</Button>
                                </div>
                                <div className="btn-cover-item">
                                    <Button>Filter</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            )
        case "phoneno":
            return (
                <Paper 
                    className="paper-cover"
                    style={{
                        display: filterForm.isEmailFilterFormOpen?"block":"none"
                    }}
                >
                    <div className="filter-cover-flex">
                        <div className="filter-cover-item">
                            <div className="form-cover-flex">
                                <div className="form-cover-item">
                                    <label htmlFor="email">Phone Number</label>
                                    <input className="filter-input" id="email" type="email" />
                                </div>
                            </div>
                            <div className="btn-cover-flex">
                                <div className="btn-cover-item">
                                    <Button>Reset</Button>
                                </div>
                                <div className="btn-cover-item">
                                    <Button>Filter</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            )
        case "date_joined":
            return (
                <Paper 
                    className="paper-cover"
                    style={{
                        display: filterForm.isDateFilterFormOpen?"block":"none"
                    }}
                >
                    <div className="filter-cover-flex">
                        <div className="filter-cover-item">
                            <div className="form-cover-flex">
                                <div className="form-cover-item">
                                    <label htmlFor="date-joined">Date Joined</label>
                                    <input className="filter-input" id="date-joined" type="date" />
                                </div>
                            </div>
                            <div className="btn-cover-flex">
                                <div className="btn-cover-item">
                                    <Button>Reset</Button>
                                </div>
                                <div className="btn-cover-item">
                                    <Button>Filter</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            )
        default:
            return (
                <div></div>
            )
    }
}