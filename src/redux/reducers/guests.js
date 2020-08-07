const initialState = {
    guestsList:[],
    isLoaded:false
};

const guests = (state = initialState, action) =>{
    switch (action.type) {

        case 'SET_GUESTS':
            return {
                ...state,
                guestsList: action.payload,
                isLoaded: true
            };
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            };

        case "SET_DECISION":
            return {
                ...state,
                guestsList: state.guestsList.map(guest =>
                    guest.id === action.payload.id ? { ...guest, invite_status: action.payload.invite_status } : guest
                )
            };
        default:
            return state;
    }
};

export default guests;