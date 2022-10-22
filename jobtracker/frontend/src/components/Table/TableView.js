import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteJob, updateJob } from "../../redux/jobSlice.js";
import { sortTable } from "../../utils/sortTable.js";
import { fetchOptions } from "../../redux/optionsSlice.js";
import {
    TableSection, TableHeaders, TableHeader, TableBody,
    TableRow, ButtonDelete, ButtonUpdate,
} from "./Table.styles.js";
import MediaQuery from "react-responsive";


function Table(props){
    const tableRow = props.tableRow;
    return (
        <TableSection>
            <thead>
                <TableHeaders>
                    <th onClick={()=>{sortTable(event.target)}}>Name</th>
                    <th onClick={()=>{sortTable(event.target)}}>Position</th>
                    <th onClick={()=>{sortTable(event.target)}}>Date</th>
                    <th onClick={()=>{sortTable(event.target)}}>Stage</th>
                    <th onClick={()=>{sortTable(event.target)}}>Status</th>
                    <th>Notes</th>
                    <th>Actions</th>
                </TableHeaders>
            </thead>
            <TableBody>
                { tableRow }
            </TableBody>
        </TableSection>
    )
}

export function TableView(props) {
    const options = useSelector((state) => state.options).options;
    const dispatch = useDispatch();
    // delete item from table row and localstorage
    const deleteRow = (id) => {
        dispatch(deleteJob(id));
    }
    // update item in table
    const updateRow = (id) => {
        const row = document.getElementById(id);
        let job = {};
        for(const cell of row.children){
            cell.firstElementChild.id !== "" ? job[cell.firstElementChild.id] = cell.firstElementChild.value : null;
        }
        job.id = id;
        dispatch(updateJob(job));
    }

    const tableRows = props.jobs.map(data => {
        return (
            <TableRow key={data.id} id={data.id}>
                <td><input type="text" id="company_name" defaultValue={data.company_name}></input></td>
                <td><input type="text" id="position" defaultValue={data.position}></input></td>
                <td><input type="date" id="date_of_application" defaultValue={data.date_of_application}></input></td>
                <td>
                    <select id="stage" required>
                        { options.stages.length > 0 && options.stages.map((localdata) => {
                            if(localdata.stage == data.stage){
                                return <option key={localdata.id} selected>{localdata.stage}</option>
                            }
                            return <option key={localdata.id}>{localdata.stage}</option>
                        })}
                    </select>
                </td>
                <td>
                    <select id="status" required>
                        { options.statuses.length > 0 && options.statuses.map((localdata) => {
                            if(localdata.status == data.status){
                                return <option key={localdata.id} selected>{localdata.status}</option>
                            }
                            return <option key={localdata.id}>{localdata.status}</option>
                        })}
                    </select>
                </td>
                <td><input type="text" id="notes" defaultValue={data.notes}></input></td>
                <td>
                    <ButtonDelete onClick={()=>{deleteRow(data.id)}}>Delete</ButtonDelete>
                    <ButtonUpdate onClick={()=>{updateRow(data.id)}}>Update</ButtonUpdate>
                </td>
            </TableRow>
        )
    })

    const mobileViewTable = tableRows.map(tableRow => {
        return <Table tableRow={tableRow} key={tableRow.key}/>
    })

    const desktopViewTable = <Table tableRow={tableRows} />

    return (
        <div>
            <MediaQuery maxWidth={1023}>
                { mobileViewTable }
            </MediaQuery>
            <MediaQuery minWidth={1024}>
                { desktopViewTable }
            </MediaQuery>
        </div>
    )
}