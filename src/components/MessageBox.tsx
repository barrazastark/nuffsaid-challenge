import styled from "styled-components";

const Message = styled.div `
    background-color: ${props => props.color};
    border-radius: .5rem;
    margin-bottom: 1rem;
    padding: .5rem;
    position: relative;

    & span {
        position: absolute;
        right: .5rem;
        bottom: .5rem;
        cursor: pointer;
    }
`;

const MessageBox = ({ onClick, color, message }) => {
    return (
        <Message color={color}>
            <p>{message.message}</p>
                    <span onClick={() => onClick(message.id)}>Clear</span>
        </Message>
    );
};

export default MessageBox;