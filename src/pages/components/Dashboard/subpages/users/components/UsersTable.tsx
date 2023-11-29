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
    Button, 
    TableHeadTypeMap
 } from '@mui/material';
 import { FilterList, MoreVert } from "@mui/icons-material";
 import { UserTableProps } from "../../../../../../types/dashboard";
 import { TableRowData } from "../../../../../../types/dashboard";
 import FilterForm from "./FilterForm";
 import TableMenu from "./TableMenu";
import { useLocation } from "react-router";

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

    const location = useLocation();

    const [filterForm, setFilterForm] = useState<FilterFormProps>(filterFormObj);

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const tableMenuOpen = Boolean(anchorEl);

    const [tableMenuId, setTableMenuId] = useState<string>("")

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

    const handleTableMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, menuId: string) => {
        const elemTarget = event.currentTarget;
        setAnchorEl(elemTarget);
        setTableMenuId(menuId);
    }

    const handleTableMenuClose = () => {
        setTableMenuId("");
    }

    const handleMenuItemClick = (event: React.MouseEvent<HTMLButtonElement>, user: TableRowData, tableMenuItemType: string) => {
        
        if(tableMenuItemType === "view_details") {
            window.location.assign("/dashboard/customers/users/user-details");
            
        }
        if(tableMenuItemType === "blacklist_user") {
            
        }
        if(tableMenuItemType === "activate_user") {

        }
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
                                        className="filter-btn"
                                        aria-label={`${filterForm.isOrgFilterFormOpen}`} 
                                        onClick={handleFilterClick}
                                    >
                                        <FilterList className="filter-icon" />
                                    </IconButton>
                                    <FilterForm filterFormType="organisation" filterForm={filterForm} />
                                </TableCell>
                                <TableCell className="table-cell-cover">
                                    USERNAME
                                    <IconButton 
                                        id="isUsernameFilterFormOpen" 
                                        className="filter-btn"
                                        aria-label={`${filterForm.isUsernameFilterFormOpen}`} 
                                        onClick={handleFilterClick}
                                    >
                                        <FilterList className="filter-icon" />
                                    </IconButton>
                                    <FilterForm filterFormType="username" filterForm={filterForm} />
                                </TableCell>
                                <TableCell className="table-cell-cover">
                                    EMAIL
                                    <IconButton 
                                        id="isEmailFilterFormOpen" 
                                        className="filter-btn"
                                        aria-label={`${filterForm.isEmailFilterFormOpen}`} 
                                        onClick={handleFilterClick}
                                    >
                                        <FilterList className="filter-icon" />
                                    </IconButton>
                                    <FilterForm filterFormType="email" filterForm={filterForm} />
                                </TableCell>
                                <TableCell className="table-cell-cover">
                                    PHONE NUMBER
                                    <IconButton 
                                        id="isPhoneFilterFormOpen" 
                                        className="filter-btn"
                                        aria-label={`${filterForm.isPhoneFilterFormOpen}`} 
                                        onClick={handleFilterClick}
                                    >
                                        <FilterList className="filter-icon" />
                                    </IconButton>
                                    <FilterForm filterFormType="phoneno" filterForm={filterForm} />
                                </TableCell>
                                <TableCell className="table-cell-cover">
                                    DATE JOINED
                                    <IconButton 
                                        id="isDateFilterFormOpen" 
                                        className="filter-btn"
                                        aria-label={`${filterForm.isDateFilterFormOpen}`} 
                                        onClick={handleFilterClick}
                                    >
                                        <FilterList className="filter-icon" />
                                    </IconButton>
                                    <FilterForm filterFormType="date_joined" filterForm={filterForm} />
                                </TableCell>
                                <TableCell className="table-cell-cover">
                                    STATUS
                                    <IconButton 
                                        id="isStatusFilterFormOpen" 
                                        className="filter-btn"
                                        aria-label={`${filterForm.isStatusFilterFormOpen}`} 
                                        onClick={handleFilterClick}
                                    >
                                        <FilterList className="filter-icon" />
                                    </IconButton>
                                    <FilterForm filterFormType="status" filterForm={filterForm} />
                                </TableCell>
                                <TableCell className="table-cell-cover"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="table-body-cover">
                            {
                                tableData.map((tData, index) => {

                                    const menuId = `table_menu${index}`;

                                    return (
                                        <TableRow className="tbody-row-cover" key={index}>
                                            <TableCell className="tbody-cell-cover">{tData.organisation}</TableCell>
                                            <TableCell className="tbody-cell-cover">{tData.username}</TableCell>
                                            <TableCell className="tbody-cell-cover">{tData.email}</TableCell>
                                            <TableCell className="tbody-cell-cover">{tData.phoneno}</TableCell>
                                            <TableCell className="tbody-cell-cover">{tData.dateJoined}</TableCell>
                                            <TableCell className="tbody-cell-cover tbody-cell-status-cover">
                                                <div className={`${tData.status}-status-cover`}>{tData.status}</div>
                                            </TableCell>
                                            <TableCell className="tbody-cell-cover">
                                                <IconButton
                                                    onClick={(event) => handleTableMenuOpen(event, menuId)}
                                                    className="more-btn"
                                                >
                                                    <MoreVert className="more-icon" />
                                                </IconButton>
                                                <TableMenu 
                                                    tableMenuId={tableMenuId} 
                                                    menuId={menuId}
                                                    anchorEl={anchorEl}
                                                    tableMenuOpen={tableMenuOpen}
                                                    handleTableMenuClose={handleTableMenuClose}
                                                    handleMenuItemClick={handleMenuItemClick}
                                                    tData={tData}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}