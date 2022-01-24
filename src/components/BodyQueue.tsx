import { memo, useCallback } from "react";
import styled from "styled-components"
import MessageBox from "./MessageBox";
import connectToContext from "./connectToContext";


const BodyQueue = ({ type, messages, messagesDispatch }) => {
    
    const handleClickClear = useCallback((id) => {
        messagesDispatch({
            type: 'removeOne',
            payload: { id, type }
        });
    }, []);

    const typeToColor = {
        0: "#F56236",
        1: "#FCE788",
        2: "#88FCA3",
    };

    return (
        <>
            {messages.map(message => (
                <MessageBox 
                    key={message.id} 
                    message={message} 
                    color={typeToColor[type]}
                    onClick={handleClickClear}    
                />
            ))}
      </>
    );

}

export default connectToContext(memo(BodyQueue));