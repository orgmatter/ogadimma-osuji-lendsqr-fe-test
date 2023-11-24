import React, { useState, useEffect } from "react";
import { 
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    Paper,
    IconButton,
    TextField,
    InputAdornment
 } from '@mui/material';
 import { FilterList, MoreVert } from "@mui/icons-material";
import { Button } from "@mui/base";

export default function UsersTable() {

    type FilterFormProps = {
        isOrgFilterFormOpen: boolean,
        isUsernameFilterFormOpen: boolean,
        isEmailFilterFormOpen: boolean,
        isPhoneFilterFormOpen: boolean,
        isDateFilterFormOpen: boolean,
        isStatusFilterFormOpen: boolean
    }

    const filterFormObj = {
        isOrgFilterFormOpen: false,
        isUsernameFilterFormOpen: false,
        isEmailFilterFormOpen: false,
        isPhoneFilterFormOpen: false,
        isDateFilterFormOpen: false,
        isStatusFilterFormOpen: false
    }

    const [filterForm, setFilterForm] = useState<FilterFormProps>(filterFormObj);

    const strToBool = (boolStr: string|null) => {
        if (boolStr === "false") {
            return false
        }else if(boolStr === "true") {
            return true
        }
    }

    const handleFilterClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        const { id, ariaLabel } = e.currentTarget;
        setFilterForm({
            ...filterFormObj,
            [id]: !strToBool(ariaLabel)
        })
    }

    return (
        <div className="users-table-cover-flex">
            <div className="users-table-cover-item">
                <TableContainer
                    className="table-container-cover"
                    component={Paper}
                >
                    <Table 
                        className="table-cover"
                        sx={{ minWidth: 650 }} 
                        aria-label="simple table"
                    >
                        <TableHead className="table-head-cover">
                            <TableRow className="table-row-cover">
                                <TableCell className="table-cell-cover" component="th">
                                    ORGANISATION 
                                    <IconButton 
                                        id="isOrgFilterFormOpen" 
                                        aria-label={`${filterForm.isOrgFilterFormOpen}`} 
                                        onClick={handleFilterClick}
                                    >
                                        <FilterList />
                                    </IconButton>
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
                                                        <label htmlFor="org">Organisation</label>
                                                        <TextField
                                                            id="org"
                                                            fullWidth
                                                        />
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
                                </TableCell>
                                <TableCell className="table-cell-cover">
                                    USERNAME
                                    <IconButton 
                                        id="isUsernameFilterFormOpen" 
                                        aria-label={`${filterForm.isUsernameFilterFormOpen}`} 
                                        onClick={handleFilterClick}
                                    >
                                        <FilterList />
                                    </IconButton>
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
                                                        <TextField
                                                            id="username"
                                                            fullWidth
                                                        />
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
                                </TableCell>
                                <TableCell className="table-cell-cover">
                                    EMAIL
                                    <IconButton 
                                        id="isEmailFilterFormOpen" 
                                        aria-label={`${filterForm.isEmailFilterFormOpen}`} 
                                        onClick={handleFilterClick}
                                    >
                                        <FilterList />
                                    </IconButton>
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
                                                        <TextField
                                                            id="email"
                                                            fullWidth
                                                        />
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
                                </TableCell>
                                <TableCell className="table-cell-cover">
                                    PHONE NUMBER
                                    <IconButton 
                                        id="isPhoneFilterFormOpen" 
                                        aria-label={`${filterForm.isPhoneFilterFormOpen}`} 
                                        onClick={handleFilterClick}
                                    >
                                        <FilterList />
                                    </IconButton>
                                    <Paper 
                                        className="paper-cover"
                                        style={{
                                            display: filterForm.isPhoneFilterFormOpen?"block":"none"
                                        }}
                                    >
                                        <div className="filter-cover-flex">
                                            <div className="filter-cover-item">
                                                <div className="form-cover-flex">
                                                    <div className="form-cover-item">
                                                        <label htmlFor="phoneno">Phone Number</label>
                                                        <TextField
                                                            id="phoneno"
                                                            fullWidth
                                                        />
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
                                </TableCell>
                                <TableCell className="table-cell-cover">
                                    DATE JOINED
                                    <IconButton 
                                        id="isDateFilterFormOpen" 
                                        aria-label={`${filterForm.isDateFilterFormOpen}`} 
                                        onClick={handleFilterClick}
                                    >
                                        <FilterList />
                                    </IconButton>
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
                                                        <TextField
                                                            id="date-joined"
                                                            fullWidth
                                                        />
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
                                </TableCell>
                                <TableCell className="table-cell-cover">
                                    STATUS
                                    <IconButton 
                                        id="isStatusFilterFormOpen" 
                                        aria-label={`${filterForm.isStatusFilterFormOpen}`} 
                                        onClick={handleFilterClick}
                                    >
                                        <FilterList />
                                    </IconButton>
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
                                                        <TextField
                                                            id="status"
                                                            fullWidth
                                                        />
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
                                </TableCell>
                                <TableCell className="table-cell-cover"><MoreVert /></TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}