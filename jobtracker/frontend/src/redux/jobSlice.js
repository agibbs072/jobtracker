import { createSlice, current } from "@reduxjs/toolkit";


const jobStorage = "jobStorage";

const createID = (newJob) => {
    // test when storage does not exist and when it is an empty array
    try {
        const jobs = JSON.parse(localStorage.getItem(jobStorage));
        const lastJob = jobs.at(-1);
        const id = lastJob.id + 1;
        newJob.id = id;
        return newJob;
    }
    catch{
        newJob.id = 1;
        return newJob;
    }
}

const toLocalStorage = (newJob) => {
    const prevData = JSON.parse(localStorage.getItem(jobStorage)) === null
        ? []
        : JSON.parse(localStorage.getItem(jobStorage));
    prevData.push(newJob);
    localStorage.setItem(jobStorage, JSON.stringify(prevData));
    return prevData;
}

const initialState = {
    jobs: (localStorage.getItem(jobStorage) === null ? [] : JSON.parse(localStorage.getItem(jobStorage))),
}

const jobSlice = createSlice({
    name: "job",
    initialState: initialState,
    reducers: {
        postJob: (state, action) => {
            const newJob = createID(action.payload);
            // send to local storage; it goes here so the user saves their progress
            const prevData = toLocalStorage(newJob);
            // send to state; it goes here so the user sees the data on the page
            let newJobs = structuredClone(current(state.jobs));
            newJobs.push(newJob);
            state.jobs = newJobs;
        },
        deleteJob: (state, action) => {
            // delete from storage
            const prevData = JSON.parse(localStorage.getItem(jobStorage));
            const id = action.payload;
            const newData = prevData.filter(data => {
                return data.id != id
            })
            localStorage.setItem(jobStorage, JSON.stringify(newData));
            // delete from state and re-render
            state.jobs = newData;
        },
        updateJob: (state, action) => {
            const prevJobs = JSON.parse(localStorage.getItem(jobStorage));
            const newJob = action.payload;
            let newJobs = prevJobs.filter(job => {
                return job.id != newJob.id;
            });
            newJobs.push(newJob);
            localStorage.setItem(jobStorage, JSON.stringify(newJobs));
            state.jobs = newJobs;
        },
    }
})

export default jobSlice.reducer
export const { deleteJob, postJob, updateJob } = jobSlice.actions