import React from "react";
import { Paper, TextField, Button, Menu } from "@mui/material";

export default function FilterForm(props: any) {

    const { 
        filterFormType, 
        filterFormId, 
        filterFormAnchorEl, 
        filterFormOpen, 
        handleFilterFormClose,
        handleResetBtnClick,
        handleFilterBtnClick,
        handleFilterFormChange,
        filterInputVal,
        tableData
    } = props

    const optionTableData = tableData.filter((tData: any, index: any, self: any) => {
        return index === self.findIndex((data: any) => data.organisation === tData.organisation)
    })
    
    switch(filterFormType) {

        case "organisation":
            return (
                <Menu 
                    id="org-form"
                    className="filter-form-menu-cover"
                    anchorEl={filterFormAnchorEl}
                    open={filterFormId === "org-form"}
                    onClose={handleFilterFormClose}
                    MenuListProps={{
                    'aria-labelledby': 'org-btn',
                    }}
                >
                    <div className="filter-cover-flex">
                        <div className="filter-cover-item">
                            <div className="form-cover-flex">
                                <div className="form-cover-item">
                                    <span>Organisation</span><br/>
                                    <select className="filter-input-select" id="org" name="organisation" onChange={handleFilterFormChange}>
                                        <option value="">Select</option>
                                        {
                                            optionTableData.map((tData:any, index:any) => {
                                                return <option value={tData.organisation}>{tData.organisation}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="btn-cover-flex">
                                <div className="btn-cover-item">
                                    <Button 
                                        variant="outlined" 
                                        className="filter-btn"
                                        onClick={(event) => handleResetBtnClick(event, "organisation")} 
                                    >Reset</Button>
                                </div>
                                <div className="btn-cover-item">
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        className="filter-btn"
                                        onClick={(event) => handleFilterBtnClick(event, "organisation")} 
                                    >Filter</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Menu>
            )
        case "status":
            return (
                <Menu 
                    id="status-form"
                    className="filter-form-menu-cover"
                    anchorEl={filterFormAnchorEl}
                    open={filterFormId === "status-form"}
                    onClose={handleFilterFormClose}
                    MenuListProps={{
                    'aria-labelledby': 'status-btn',
                    }}
                >
                    <div className="filter-cover-flex">
                        <div className="filter-cover-item">
                            <div className="form-cover-flex">
                                <div className="form-cover-item">
                                    <span>Status</span><br/>
                                    <select className="filter-input-select" id="status" name="status" onChange={handleFilterFormChange}>
                                        <option value="">Select</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                        <option value="blacklisted">Blacklisted</option>
                                    </select>
                                </div>
                            </div>
                            <div className="btn-cover-flex">
                                <div className="btn-cover-item">
                                    <Button 
                                        variant="outlined" 
                                        className="filter-btn"
                                        onClick={(event) => handleResetBtnClick(event, "status")} 
                                    >Reset</Button>
                                </div>
                                <div className="btn-cover-item">
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        className="filter-btn"
                                        onClick={(event) => handleFilterBtnClick(event, "status")} 
                                    >Filter</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Menu>
            )
        case "username":
            return (
                <Menu 
                    id="username-form"
                    className="filter-form-menu-cover"
                    anchorEl={filterFormAnchorEl}
                    open={filterFormId === "username-form"}
                    onClose={handleFilterFormClose}
                    MenuListProps={{
                    'aria-labelledby': 'username-btn',
                    }}
                >
                    <div className="filter-cover-flex">
                        <div className="filter-cover-item">
                            <div className="form-cover-flex">
                                <div className="form-cover-item">
                                    <span>Username</span><br/>
                                    <TextField className="filter-input-text" id="username" type="text" name="username" value={filterInputVal?.username} onChange={handleFilterFormChange} fullWidth/>
                                </div>
                            </div>
                            <div className="btn-cover-flex">
                                <div className="btn-cover-item">
                                    <Button 
                                        variant="outlined" 
                                        className="filter-btn"
                                        onClick={(event) => handleResetBtnClick(event, "username")} 
                                    >Reset</Button>
                                </div>
                                <div className="btn-cover-item">
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        className="filter-btn"
                                        onClick={(event) => handleFilterBtnClick(event, "username")} 
                                    >Filter</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Menu>
            )
        case "email":
            return (
                <Menu 
                    className="filter-form-menu-cover"
                    anchorEl={filterFormAnchorEl}
                    open={filterFormId === "email-form"}
                    onClose={handleFilterFormClose}
                    
                >
                    <div className="filter-cover-flex">
                        <div className="filter-cover-item">
                            <div className="form-cover-flex">
                                <div className="form-cover-item">
                                    <span>Email</span><br/>
                                    <TextField className="filter-input-text" id="email" type="email" name="email" value={filterInputVal?.email} onChange={handleFilterFormChange} fullWidth/>
                                </div>
                            </div>
                            <div className="btn-cover-flex">
                                <div className="btn-cover-item">
                                    <Button 
                                        variant="outlined" 
                                        className="filter-btn"
                                        onClick={(event) => handleResetBtnClick(event, "email")} 
                                    >Reset</Button>
                                </div>
                                <div className="btn-cover-item">
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        className="filter-btn"
                                        onClick={(event) => handleFilterBtnClick(event, "email")} 
                                    >Filter</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Menu>
            )
        case "phoneno":
            return (
                <Menu 
                    id="phoneno-form"
                    className="filter-form-menu-cover"
                    anchorEl={filterFormAnchorEl}
                    open={filterFormId === "phoneno-form"}
                    onClose={handleFilterFormClose}
                    MenuListProps={{
                    'aria-labelledby': 'phoneno-btn',
                    }}
                >
                    <div className="filter-cover-flex">
                        <div className="filter-cover-item">
                            <div className="form-cover-flex">
                                <div className="form-cover-item">
                                    <span>Phone Number</span><br/>
                                    <TextField className="filter-input-text" id="phoneno" type="text" name="phoneno" value={filterInputVal?.phoneno} onChange={handleFilterFormChange} fullWidth/>
                                </div>
                            </div>
                            <div className="btn-cover-flex">
                                <div className="btn-cover-item">
                                    <Button 
                                        variant="outlined" 
                                        className="filter-btn"
                                        onClick={(event) => handleResetBtnClick(event, "phoneno")} 
                                    >Reset</Button>
                                </div>
                                <div className="btn-cover-item">
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        className="filter-btn"
                                        onClick={(event) => handleFilterBtnClick(event, "phoneno")} 
                                    >Filter</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Menu>
            )
        case "date_joined":
            return (
                <Menu 
                    id="date-form"
                    className="filter-form-menu-cover"
                    anchorEl={filterFormAnchorEl}
                    open={filterFormId === "date-form"}
                    onClose={handleFilterFormClose}
                    MenuListProps={{
                    'aria-labelledby': 'date-btn',
                    }}
                >
                    <div className="filter-cover-flex">
                        <div className="filter-cover-item">
                            <div className="form-cover-flex">
                                <div className="form-cover-item">
                                    <span>Date Joined</span><br/>
                                    <TextField className="filter-input-text" id="date-joined" type="date" name="dateJoined" value={filterInputVal?.dateJoined} onChange={handleFilterFormChange} fullWidth/>
                                </div>
                            </div>
                            <div className="btn-cover-flex">
                                <div className="btn-cover-item">
                                    <Button 
                                        variant="outlined" 
                                        className="filter-btn"
                                        onClick={(event) => handleResetBtnClick(event, "dateJoined")} 
                                    >Reset</Button>
                                </div>
                                <div className="btn-cover-item">
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        className="filter-btn"
                                        onClick={(event) => handleFilterBtnClick(event, "date")} 
                                    >Filter</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Menu>
            )
        default:
            return (
                <div></div>
            )
    }
}