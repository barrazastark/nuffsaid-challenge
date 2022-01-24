const initialState = "";

const messagesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    
    switch(type){
        case 'addAlert': 
            return payload;
        case 'removeAlert':
            return initialState;
        default: return state;
    }
}

export default messagesReducer;