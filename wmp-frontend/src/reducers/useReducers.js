import { ADD_PLANT, FETCH_PLANTS_START, FETCH_PLANTS_SUCCESS, FETCH_PLANTS_FAILURE, SET_ERROR } from '../actions/Actions'

export const initialState = {
    plants: [],
    isLoading: false,
    errorMsg: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_PLANT:
            return {...state, plants: [...state.plants, action.payload]}

        case SET_ERROR:
            return {...state, errorMsg: action.payload}

        case FETCH_PLANTS_START:
            return {...state, isLoading: true}

        case FETCH_PLANTS_SUCCESS:
            return {...state, isLoading: false, plants: action.payload}

        case FETCH_PLANTS_FAILURE:
            return {...state, isLoading: false, error: action.payload}

        default:
            return state;
    }
}

export default reducer
