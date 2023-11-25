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
    InputAdornment,
    Button 
 } from '@mui/material';
 import { FilterList, MoreVert } from "@mui/icons-material";
 import { UserTableProps } from "../../../../../../types/dashboard";
 import FilterForm from "./FilterForm";

export default function UsersTable(props: UserTableProps) {

    const { tableData } = props;

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
                                    <FilterForm filterFormType="organisation" filterForm={filterForm} />
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
                                    <FilterForm filterFormType="username" filterForm={filterForm} />
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
                                    <FilterForm filterFormType="email" filterForm={filterForm} />
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
                                    <FilterForm filterFormType="phoneno" filterForm={filterForm} />
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
                                    <FilterForm filterFormType="date_joined" filterForm={filterForm} />
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
                                    <FilterForm filterFormType="status" filterForm={filterForm} />
                                </TableCell>
                                <TableCell className="table-cell-cover"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="table-bpdy-cover">
                            {
                                tableData.map((tData, index) => (
                                    <TableRow className="tbody-row-cover" key={index}>
                                        <TableCell className="tbody-cell-cover">{tData.organisation}</TableCell>
                                        <TableCell className="tbody-cell-cover">{tData.username}</TableCell>
                                        <TableCell className="tbody-cell-cover">{tData.email}</TableCell>
                                        <TableCell className="tbody-cell-cover">{tData.phoneno}</TableCell>
                                        <TableCell className="tbody-cell-cover">{tData.dateJoined}</TableCell>
                                        <TableCell className="tbody-cell-cover">{tData.status}</TableCell>
                                        <TableCell className="tbody-cell-cover"><IconButton><MoreVert /></IconButton></TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}