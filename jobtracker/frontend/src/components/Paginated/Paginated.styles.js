import styled from 'styled-components';
import ReactPaginate from 'react-paginate';


export const Title = styled.h3`
    border-bottom: 1px solid rgb(200, 200, 200);
    padding: 0em 0em 0.5em 0em;
    margin: 0em 1em 0.5em 1em;
`

export const StyledReactPaginate = styled(ReactPaginate)`
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 7em 2em 2em 0em;

    li.previous a {
        border: 1px solid rgb(200, 200, 200);
        color: rgb(70, 100, 230);
        padding: 0.3em 0.5em 0.3em 0.5em;
    }
    li.next a{
        border: 1px solid rgb(200, 200, 200);
        color: rgb(70, 100, 230);
        padding: 0.3em 0.5em 0.3em 0.5em;
    }
    li.selected a{
        border: 1px solid rgb(70, 100, 200);
        background-color: rgb(70, 100, 230);
        color: rgb(255, 255, 255);
        padding: 0.3em 0.5em 0.3em 0.5em;
    }
    li a {
        border: 1px solid rgb(200, 200, 200);
        color: rgb(70, 100, 230);
        padding: 0.3em 0.5em 0.3em 0.5em;
    }
`
