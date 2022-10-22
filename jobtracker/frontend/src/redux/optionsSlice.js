import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loading: false,
    options: {stages: [], statuses: []},
    error: "",
}

const requestOne = axios.get("/api/statuses/");
const requestTwo = axios.get("/api/stages/");

export const fetchOptions = createAsyncThunk("options/fetchOptions", () => {
    return axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
        const responseOne = responses[0].data;
        const responseTwo = responses[1].data;
        return {statuses: responseOne, stages: responseTwo};
    }))
})

const optionsSlice = createSlice({
    name: "options",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchOptions.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchOptions.fulfilled, (state, action) => {
            const response = action.payload;
            state.loading = false
            state.options = {stages: response.stages, statuses: response.statuses}
            state.error = ""
        })
        builder.addCase(fetchOptions.rejected, (state, action) => {
            state.loading = false
            state.options = {stages: [], statuses: []}
            state.error = action.error.message
        })
    }
})

export default optionsSlice.reducer