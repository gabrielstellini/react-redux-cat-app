import fetch from 'cross-fetch'

export const CAT_FACT_CALL_INIT = 'CAT_FACT_CALL_INIT';
export const CAT_FACT_CALL_SUCCESS = 'CAT_FACT_CALL_SUCCESS';
export const CAT_IMAGE_CALL_INIT = 'CAT_IMAGE_CALL_INIT';
export const CAT_IMAGE_CALL_SUCCESS = 'CAT_IMAGE_CALL_SUCCESS';

export function fetchCatFactSuccess(data) {
    return {
        type: CAT_FACT_CALL_SUCCESS, data
    }
}

export function fetchCatImageSuccess(data) {
    return {type: CAT_IMAGE_CALL_SUCCESS, data }
}

export function fetchCatFact() {
    return dispatch => {
        dispatch({type: CAT_FACT_CALL_INIT});
        return fetch('https://cors-anywhere.herokuapp.com/https://catfact.ninja/fact')
            .then(handleErrors)
            .then(res =>  res.json())
            .then(json => {
                dispatch(fetchCatFactSuccess(json.fact));
                return json.fact;
            })
    }
}

export function fetchCatImage() {
    return dispatch => {
        dispatch({type: CAT_IMAGE_CALL_INIT});
        return fetch('https://cors-anywhere.herokuapp.com/https://cataas.com/cat')
            .then(handleErrors)
            .then(img => {
                dispatch(fetchCatImageSuccess(img));
                return img;
            })
    }
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
