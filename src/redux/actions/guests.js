import axios from "axios";

export const setLoaded = (payload) => ({
    type:"SET_LOADED",
    payload
});

export const fetchGuests =  () => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`http://localhost:3001/guests`).then(({data})=>{
        dispatch(setGuests(data));
    });

};

export const setGuests = (items) =>({
        type:'SET_GUESTS',
        payload:items
    }
);

export const setDecision = (payload) =>({
        type:'SET_DECISION',
        payload
    }
);