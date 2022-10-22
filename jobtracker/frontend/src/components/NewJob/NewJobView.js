import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postJob } from "../../redux/jobSlice.js";
import { fetchOptions } from "../../redux/optionsSlice.js";
import {NewJobSection, NewJobForm, NewJobCreate, NewJobCreateButton} from "./NewJob.styles.js";


export function NewJobView() {
    const dispatch = useDispatch();
    const options = useSelector((state) => state.options).options;

    React.useEffect(() => {
        dispatch(fetchOptions());
    }, [])

    const handleFormData = (event) => {
        event.preventDefault();
        // turn the form into an object
        const data = Object.fromEntries(new FormData(event.target));
        // dispatch the data to the store
        dispatch(postJob(data));
    }

    return (
        <NewJobSection>
            <h3>Add Job</h3>
            <NewJobForm onSubmit={handleFormData}>
                <NewJobCreate>
                    <label htmlFor="company_name">Company Name</label>
                    <input type="text" name="company_name" id="company_name" required></input>
                </NewJobCreate>
                <NewJobCreate>
                    <label htmlFor="position">Position</label>
                    <input type="text" name="position" id="position" required></input>
                </NewJobCreate>
                <NewJobCreate>
                    <label htmlFor="date_of_application">Application Date</label>
                    <input type="date" name="date_of_application" id="date_of_application" required></input>
                </NewJobCreate>
                <NewJobCreate>
                    <label htmlFor="stage">Stage</label>
                    <select name="stage" id="stage" required>
                        { options.stages.length > 0 && options.stages.map((data) => (
                            <option key={data.id} value={data.stage}>{data.stage}</option>
                        ))}
                    </select>
                </NewJobCreate>
                <NewJobCreate>
                    <label htmlFor="status">Status</label>
                    <select name="status" id="status" required>
                        { options.statuses.length > 0 && options.statuses.map((data) => (
                            <option key={data.id} value={data.status}> {data.status}</option>
                        ))}
                    </select>
                </NewJobCreate>
                <NewJobCreate>
                    <label htmlFor="notes">Notes</label>
                    <textarea id="notes" name="notes" rows="4" cols="50"></textarea>
                </NewJobCreate>
                <NewJobCreateButton>Submit</NewJobCreateButton>
            </NewJobForm>
        </NewJobSection>
    )
}
