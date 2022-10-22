import React, { useEffect, useState } from "react";
import { TableView } from "../Table/TableView.js";
import { useSelector } from "react-redux";
import { StyledReactPaginate, Title } from "./Paginated.styles.js";


function TableTitle(){
    return <Title>Jobs</Title>
}

export function PaginatedView() {
    // obtain all items within the state
    const jobs = useSelector((state) => state.job).jobs;
    const jobsPerPage = 5;
    const [currentJobs, setCurrentJobs] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + jobsPerPage;
        setCurrentJobs(jobs.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(jobs.length / jobsPerPage));
    }, [itemOffset, jobsPerPage, jobs]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * jobsPerPage) % jobs.length;
        setItemOffset(newOffset);
    };

    return (
        <div>
            <TableTitle />
            { currentJobs.length > 0 && <TableView jobs={currentJobs} /> }
            <StyledReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
             />
        </div>
    );
}


