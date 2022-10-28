import { SETFORMDATA, SET_DATA_OF_API_BIRTH, SET_DATA_OF_API_ASTRO, SET_DATA_OF_API_PANCHANG } from './Actiontype'

export const setData = (data) => {
    return {
        type: SETFORMDATA,
        payload: data,
    }
}

export const setDataOfApiBirth = (data) => {
    return {
        type: SET_DATA_OF_API_BIRTH,
        payload: data,
    }
}

export const setDataOfApiAstro = (data) => {
    return {
        type: SET_DATA_OF_API_ASTRO,
        payload: data,
    }
}

export const setDataOfApiPanchang = (data) => {
    return {
        type: SET_DATA_OF_API_PANCHANG,
        payload: data,
    }
}

// export default setData;