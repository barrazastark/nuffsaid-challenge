import { memo } from "react";

import QueueHeader from './QueueHeader';
import BodyQueue from './BodyQueue';
import styled from "styled-components"

const FlexContainer = styled.div `
    display: flex;
    flex-direction: column;
    flex: 1 1 0px;
    margin: 0 .5rem;
`;

const MessageQueue = ({ type }) => {
    return (
        <FlexContainer>
            <QueueHeader type={type} />
            <BodyQueue type={type} />
        </FlexContainer>  
    );
};

export default memo(MessageQueue);