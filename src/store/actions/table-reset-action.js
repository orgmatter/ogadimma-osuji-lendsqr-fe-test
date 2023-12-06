export const TableResetAction = (data) => {
    console.log("reset data: ", data);

    return {
        type: "TABLE_RESET",
        payload: data
    }
}