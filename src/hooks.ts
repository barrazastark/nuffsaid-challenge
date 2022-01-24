import { useEffect, useRef, useReducer } from 'react';
import generateMessage, { Message } from './Api';
import messagesReducer from './reducers/messagesReducer';
import alertReducer from "./reducers/alertReducer";

export const useGetData = (isRunning: boolean) => {
    const id = useRef(1);
    const [messages, messagesDispatch] = useReducer(messagesReducer, {
        0: [], 
        1: [], 
        2: []
    });

    const [alert, alertDispatch] = useReducer(alertReducer, "");
    

    useEffect(() => {

        if(!isRunning){
            return;
        }

        const cleanUp = generateMessage((newMessage: Message) => {
            const { priority, message } = newMessage;
        
            messagesDispatch({
                type: 'addOne', 
                payload: {
                    priority, 
                    message,
                    id: id.current
                }
            });

            if(priority === 0){
                alertDispatch({
                    type: 'addAlert',
                    payload: message,
                });
            }
            
            id.current++;
        });
        
        
        return cleanUp;
      }, [isRunning]);

      return [messages, messagesDispatch, alert, alertDispatch];
}

