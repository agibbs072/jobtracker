import styled from 'styled-components';


export const TableSection = styled.table`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0em 1em 1em 1em;

    &:nth-child(odd){
        background-color: rgb(200, 200, 200);
    }

    @media screen and (min-width: 1024px){
        display: table;

        &:nth-child(odd){
            background-color: rgb(255, 255, 255);
        }
    }
`

export const TableHeaders = styled.tr`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 0.5em 0.5em 0.5em 0.5em;

    > th {
        cursor: pointer;
        margin: 0em 0em 0.3em 0em;
    }

    @media screen and (min-width: 1024px){
        display: table-row;
    }
`

export const TableBody = styled.tbody`
    margin: 0em 0em 0em 0.6em;
`

export const TableRow = styled.tr`
    display: flex;
    flex-direction: column;
    padding: 0.5em 0.5em 0.5em 0.5em;

    > td {
        margin: 0em 0em 0.3em 0em;
    }

    > td > input {
        border: none;
    }

    @media screen and (min-width: 1024px){
        display: table-row;

        &:nth-child(odd){
            background-color: rgb(200, 200, 200);

            > td > input {
                background-color: rgb(200, 200, 200);
            }
        }
    }
`

export const TableButton = styled.button`
    width: 5.5em;
    color: rgb(255, 255, 255);
    padding: 0.2em 0em 0.2em 0em;
    border: none;
    cursor: pointer;
    border-radius: 30px;
`

export const ButtonDelete = styled(TableButton)`
    background-color: rgb(200, 0, 0);
    margin: 0em 0.5em 0em 0em;

    &:hover{
        background-color: rgb(150, 0, 0);
    }
`

export const ButtonUpdate = styled(TableButton)`
    background-color: rgb(200, 200, 0);

    &:hover{
        background-color: rgb(150, 150, 0);
    }
`