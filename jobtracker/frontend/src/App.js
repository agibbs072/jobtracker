import React from "react";
import { NewJobView } from "./components/NewJob/NewJobView.js";
import { PaginatedView } from "./components/Paginated/PaginatedView.js";
import { HeaderView } from "./components/Header/HeaderView.js";
import { GlobalStyle } from "./components/Global.styles.js";
import { TableSection } from "./components/Main.styles.js";


export function App() {
    return (
        <>
            <GlobalStyle />
            <HeaderView />
            <NewJobView />
            <TableSection>
                <PaginatedView />
            </TableSection>
        </>
    )
}

