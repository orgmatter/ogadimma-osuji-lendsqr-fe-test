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
    TablePagination
 } from '@mui/material';
 import { FilterList, MoreVert } from "@mui/icons-material";
 import { UserTableProps } from "../../../../../../types/dashboard";
 import { TableRowData } from "../../../../../../types/dashboard";
 import FilterForm from "./FilterForm";
 import TableMenu from "./TableMenu";
 import { useDispatch } from "react-redux";
 import { TableFilterAction } from "../../../../../../store/actions/table-filter-action";
 import { TableResetAction } from "../../../../../../store/actions/table-reset-action";
 import useStorage from "../../../../../../hooks/useStorage";

export default function UsersTable(props: UserTableProps) {

    const { tableData, eventType, handleShowUserDetailsPage } = props;


    const { getStorageData, clearStorageData } = useStorage();
    

    const dispatchFilter = useDispatch()

    const [userStatus, setUserStatus] = useState<string>("")

    const [tableMenuAnchorEl, setTableMenuAnchorEl] = useState<HTMLElement | null>(null);
    const [tableMenuId, setTableMenuId] = useState<string>("");
    const tableMenuOpen = Boolean(tableMenuAnchorEl);

    const [filterFormAnchorEl, setFilterFormAnchorEl] = useState<HTMLElement | null>(null);
    const [filterFormId, setFilterFormId] = useState<string|null>("");
    const filterFormOpen = Boolean(filterFormAnchorEl);

    const filterInputObj = {
        organisation: "",
        status: "",
        username: "",
        email: "",
        phoneno: "",
        dateJoined: ""
    }

    const [filterInputVal, setFilterInputVal] = useState({});

    console.log("filter input val: ", filterInputVal)

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(50);


    //--> all table menu function handlers
    const handleTableMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, menuId: string) => {
        const elemTarget = event.currentTarget;
        setTableMenuAnchorEl(elemTarget);
        setTableMenuId(menuId);
    }
    const handleTableMenuClose = () => {
        setTableMenuId("");
    }
    const handleTableMenuItemClick = (event: React.MouseEvent<HTMLButtonElement>, tRowData: TableRowData, tRowDataIndex: number, tableMenuItemType: string) => {

        if(tableMenuItemType === "blacklist_user") {

            tableData[tRowDataIndex].status = "blacklisted";
            setUserStatus("blacklisted");
        }
        if(tableMenuItemType === "activate_user") {

            tableData[tRowDataIndex].status = "active";
            setUserStatus("active");
        }
    }

    //--> all filter form function handlers
    const handleFilterFormOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        const elemTarget = event.currentTarget;
        const { ariaLabel } = elemTarget;
        setFilterFormId(ariaLabel);
        setFilterFormAnchorEl(elemTarget);
    }
    const handleFilterFormClose = () => {
        setFilterFormId("");
    }

    const handleFilterFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterInputVal({
            [e.target.name]: e.target.value
        })
    }

    const handleResetBtnClick = (event:React.MouseEvent<HTMLButtonElement>, btnId:string) => {
        const resetTableData = JSON.parse(getStorageData("tableData") as any);
        console.log("reset: ", resetTableData)
        dispatchFilter(TableResetAction(resetTableData));

        // --> clear storage data
        clearStorageData("tableData" as any);
        
        //--> close the filter form
        setFilterFormId("");
    }
    const handleFilterBtnClick = (event:React.MouseEvent<HTMLButtonElement>, btnId:string) => {
        const filterTableData = tableData.filter(data => data[btnId as keyof typeof data] === filterInputVal[btnId as keyof typeof filterInputVal]);
        dispatchFilter(TableFilterAction(filterTableData));

        //--> close the filter form
        setFilterFormId("");
    }

    //--> all table pagination function handlers
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {

    }, [userStatus, tableData])
    
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
                                        id="org-btn"
                                        aria-label="org-form"
                                        className="filter-icon-btn"
                                        aria-controls={filterFormId === "org-form" ? 'org-form' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={filterFormId === "org-form" ? 'true' : undefined}
                                        onClick={handleFilterFormOpen}
                                    >
                                        <FilterList className="filter-icon" />
                                    </IconButton>
                                    <FilterForm 
                                        handleFilterFormOpen={handleFilterFormOpen} 
                                        handleFilterFormClose={handleFilterFormClose}
                                        handleFilterFormChange={handleFilterFormChange}
                                        handleResetBtnClick={handleResetBtnClick}
                                        handleFilterBtnClick={handleFilterBtnClick}
                                        filterFormOpen={filterFormOpen}
                                        filterFormAnchorEl={filterFormAnchorEl} 
                                        filterFormType="organisation" 
                                        filterFormId={filterFormId}
                                        filterInputVal={filterInputVal}
                                        tableData={tableData}
                                        
                                    />
                                </TableCell>
                                <TableCell className="table-cell-cover">
                                    USERNAME
                                    <IconButton 
                                        id="username-btn"
                                        aria-label="username-form"
                                        className="filter-icon-btn"
                                        aria-controls={filterFormId === "username-form" ? 'username-form' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={filterFormId === "username-form" ? 'true' : undefined}
                                        onClick={handleFilterFormOpen}
                                    >
                                        <FilterList className="filter-icon" />
                                    </IconButton>
                                    <FilterForm 
                                        handleFilterFormOpen={handleFilterFormOpen} 
                                        handleFilterFormClose={handleFilterFormClose}
                                        handleFilterFormChange={handleFilterFormChange}
                                        handleResetBtnClick={handleResetBtnClick}
                                        handleFilterBtnClick={handleFilterBtnClick}
                                        filterFormOpen={filterFormOpen} 
                                        filterFormAnchorEl={filterFormAnchorEl} 
                                        filterFormType="username" 
                                        filterFormId={filterFormId}
                                        filterInputVal={filterInputVal} 
                                        tableData={tableData}
                                    />
                                </TableCell>
                                <TableCell className="table-cell-cover">
                                    EMAIL
                                    <IconButton 
                                        id="email-btn"
                                        aria-label="email-form"
                                        className="filter-icon-btn"
                                        aria-controls={filterFormId === "email-form" ? 'email-form' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={filterFormId === "email-form" ? 'true' : undefined}
                                        onClick={handleFilterFormOpen}
                                    >
                                        <FilterList className="filter-icon" />
                                    </IconButton>
                                    <FilterForm 
                                        handleFilterFormOpen={handleFilterFormOpen} 
                                        handleFilterFormClose={handleFilterFormClose}
                                        handleFilterFormChange={handleFilterFormChange}
                                        handleResetBtnClick={handleResetBtnClick}
                                        handleFilterBtnClick={handleFilterBtnClick}
                                        filterFormOpen={filterFormOpen} 
                                        filterFormAnchorEl={filterFormAnchorEl} 
                                        filterFormType="email" 
                                        filterFormId={filterFormId}
                                        filterInputVal={filterInputVal} 
                                        tableData={tableData}
                                    />
                                </TableCell>
                                <TableCell className="table-cell-cover">
                                    PHONE NUMBER
                                    <IconButton 
                                        id="phoneno-btn"
                                        aria-label="phoneno-form"
                                        className="filter-icon-btn"
                                        aria-controls={filterFormId === "phoneno-form" ? 'phoneno-form' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={filterFormId === "phoneno-form" ? 'true' : undefined}
                                        onClick={handleFilterFormOpen}
                                    >
                                        <FilterList className="filter-icon" />
                                    </IconButton>
                                    <FilterForm 
                                        handleFilterFormOpen={handleFilterFormOpen} 
                                        handleFilterFormClose={handleFilterFormClose}
                                        handleFilterFormChange={handleFilterFormChange}
                                        handleResetBtnClick={handleResetBtnClick}
                                        handleFilterBtnClick={handleFilterBtnClick}
                                        filterFormOpen={filterFormOpen} 
                                        filterFormAnchorEl={filterFormAnchorEl} 
                                        filterFormType="phoneno" 
                                        filterFormId={filterFormId}
                                        filterInputVal={filterInputVal} 
                                        tableData={tableData}
                                    />
                                </TableCell>
                                <TableCell className="table-cell-cover">
                                    DATE JOINED
                                    <IconButton 
                                        id="date-btn"
                                        aria-label="date-form"
                                        className="filter-icon-btn"
                                        aria-controls={filterFormId === "date-form" ? 'date-form' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={filterFormId === "date-form" ? 'true' : undefined}
                                        onClick={handleFilterFormOpen}
                                    >
                                        <FilterList className="filter-icon" />
                                    </IconButton>
                                    <FilterForm 
                                        handleFilterFormOpen={handleFilterFormOpen} 
                                        handleFilterFormClose={handleFilterFormClose}
                                        handleFilterFormChange={handleFilterFormChange}
                                        handleResetBtnClick={handleResetBtnClick}
                                        handleFilterBtnClick={handleFilterBtnClick}
                                        filterFormOpen={filterFormOpen} 
                                        filterFormAnchorEl={filterFormAnchorEl} 
                                        filterFormType="date_joined" 
                                        filterFormId={filterFormId}
                                        filterInputVal={filterInputVal} 
                                        tableData={tableData}
                                    />
                                </TableCell>
                                <TableCell className="table-cell-cover">
                                    STATUS
                                    <IconButton 
                                        id="status-btn"
                                        aria-label="status-form"
                                        className="filter-icon-btn"
                                        aria-controls={filterFormId === "status-form" ? 'status-form' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={filterFormId === "status-form" ? 'true' : undefined}
                                        onClick={handleFilterFormOpen}
                                    >
                                        <FilterList className="filter-icon" />
                                    </IconButton>
                                    <FilterForm 
                                        handleFilterFormOpen={handleFilterFormOpen} 
                                        handleFilterFormClose={handleFilterFormClose}
                                        handleFilterFormChange={handleFilterFormChange}
                                        handleResetBtnClick={handleResetBtnClick}
                                        handleFilterBtnClick={handleFilterBtnClick}
                                        filterFormOpen={filterFormOpen} 
                                        filterFormAnchorEl={filterFormAnchorEl} 
                                        filterFormType="status" 
                                        filterFormId={filterFormId}
                                        filterInputVal={filterInputVal} 
                                        tableData={tableData}
                                    />
                                </TableCell>
                                <TableCell className="table-cell-cover"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="table-body-cover">
                            {
                                tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((tData, index) => {

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
                                                    tableMenuAnchorEl={tableMenuAnchorEl}
                                                    tableMenuOpen={tableMenuOpen}
                                                    handleTableMenuClose={handleTableMenuClose}
                                                    handleTableMenuItemClick={handleTableMenuItemClick}
                                                    tData={tData}
                                                    tDataIndex={index}
                                                    handleShowUserDetailsPage={handleShowUserDetailsPage}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[50, 100, 150, 200]}
                    component="div"
                    count={tableData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage={<p>Showing</p>}
                />
            </div>
        </div>
    )
}