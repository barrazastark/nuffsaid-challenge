const messagesReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case 'addOne':
            return {
                ...state,
                [payload.priority]: [
                    { id: payload.id, message: payload.message },
                    ...state[payload.priority]
                ]
            };
        case 'removeOne':
            return {
                ...state,
                [payload.type]: 
                    state[payload.type]
                        .filter(m => m.id !== payload.id)
            }    
        case 'removeAll':
            return {
                0: [],
                1: [],
                2: [],
            };
        default: return state;
    }
}

export default messagesReducer;