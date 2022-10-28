import { SETDATA } from '../action/Actiontype';

const initData = {
    getData: []
};

const Reducer = (state = initData, action) => {
    switch (action.type) {
        case SETDATA:
            return {
                ...state,
                getData: action.payload
            };

        default:
            return state;
    }
}
export default Reducer;