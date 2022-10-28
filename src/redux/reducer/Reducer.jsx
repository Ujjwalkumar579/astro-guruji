import { SETFORMDATA, SET_DATA_OF_API_BIRTH, SET_DATA_OF_API_ASTRO, SET_DATA_OF_API_PANCHANG } from '../action/Actiontype';

const initData = {
    getData: {
        dob: "",
        latitude: "",
        longitude: "",
        time: "",
        timezone: ""
    },
    getApiDataBirth: "",
    getApiDataAstro: "",
    getApiDataPanchang: "",
};

const Reducer = (state = initData, action) => {
    switch (action.type) {
        case SETFORMDATA:
            return {
                ...state,
                getData: action.payload
            };
        case SET_DATA_OF_API_BIRTH:
            return {
                ...state,
                getApiDataBirth: action.payload
            };
        case SET_DATA_OF_API_ASTRO:
            return {
                ...state,
                getApiDataAstro: action.payload
            };
        case SET_DATA_OF_API_PANCHANG:
            return {
                ...state,
                getApiDataPanchang: action.payload
            };

        default:
            return state;
    }
}
export default Reducer;