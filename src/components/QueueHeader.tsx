import { memo } from "react";
import styled from "styled-components"
import connectToContext from "./connectToContext";

const Header = styled.div`
    padding: .5rem 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    & span:first-of-type {
        font-weight: bold;
        font-size: 2rem;
    }
`;


const HeaderQueue = ({ type, messages }) => {

    const typeToText = {
        0: `Error Type ${type+1}`,
        1: `Warning Type ${type+1}`,
        2: `Info Type ${type+1}`,
    }

    return (
        <Header>
            <span>{typeToText[type]}</span>
            <span>Count {messages.length}</span>
        </Header>
    );
}

export default connectToContext(memo(HeaderQueue));