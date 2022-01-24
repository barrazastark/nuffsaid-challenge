import { memo } from "react"
import styled from "styled-components"

const Header = styled.header`
    font-size: 3rem;
    padding: .5rem 0;
    border-bottom: 1px solid;
`

export default memo(() => {
    return (
        <Header>
            nuffsaid.com Coding Challenge
        </Header>
    );
});