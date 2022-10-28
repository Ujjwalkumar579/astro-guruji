import { SETDATA } from './Actiontype'

const setData = (data) => {
    return {
        type: SETDATA,
        payload: data,
    }
}

export default setData;