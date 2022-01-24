import { createContext, Dispatch } from "react";

type UniqueMessages = {
    message: string
    id: number
}

type ActioType = 
 | { type: "addOne", payload: { id: number, message: string, priority: number }}
 | { type: "removeOne", payload: { id: number, type: number }}
 | { type: "removeAll" }


interface ContextType  {
    messages: {
        [type: number]: UniqueMessages[],
    }
    messagesDispatch: Dispatch<ActioType>
};

const MessagesContext = createContext<ContextType>({
    messages: {
    },
    messagesDispatch: () => {},
});

export default MessagesContext;