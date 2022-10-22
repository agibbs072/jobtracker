import styled from 'styled-components';


export const NewJobSection = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid rgb(200, 200, 200);
    margin: 0em 1em 2em 1em;
    padding: 0em 1em 0.5em 1em;

    @media screen and (min-width: 1024px){
        margin: 2em 20% 2em 20%;
    }
`

export const NewJobForm = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const NewJobCreate = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0.5em 0em 0.5em 0em;

    > input {
        font-size: 1em;
    }
`

export const NewJobCreateButton = styled.button`
    color: rgb(255, 255, 255);
    background-color: rgb(70, 100, 230);
    margin: 0.5em 0em 0em 0em;
    padding: 0.5em 0.5em 0.5em 0.5em;
    border: none;
    cursor: pointer;
    border-radius: 30px;

    &:hover{
        background-color: rgb(40, 70, 200);
    }
`