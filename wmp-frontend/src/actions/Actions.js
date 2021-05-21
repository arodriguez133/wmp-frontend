import axios from 'axios'

//THUNKY FUN

export const ADD_PLANT = 'ADD_PLANT'
export const SET_ERROR = 'SET_ERROR'
export const FETCH_PLANTS_START = 'FETCH_PLANTS_START'
export const FETCH_PLANTS_SUCCESS = 'FETCH_PLANTS_SUCCESS'
export const FETCH_PLANTS_FAILURE = 'FETCH_PLANTS_FAILURE'

export const DELETE_PLANT = 'DELETE_PLANT'


//...add a new plant into our object
export const addPlant = (nickname, species, water, description) => {

    const newPlant = {
        nickname: nickname,
        species: species,
        water: water,
        description: description,
    }

    return ({ type: ADD_PLANT, payload: newPlant });
    
}

// Error Message
export const setErrorMsg = (errorMsg) => {
    return ({ type: SET_ERROR, payload: errorMsg })
}

//API fetch function
export const fetchPlants = () => (dispatch) => {
    dispatch ({ type: FETCH_PLANTS_START })

    //fetch the api here
    axios.get(`https://water-my-plants-build.herokuapp.com/plants`)
        .then(res => {
            dispatch({ type: FETCH_PLANTS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log("error: ", err)
            dispatch({ type: FETCH_PLANTS_FAILURE, payload: err})
    })
}

export const deletePlant = (plantId) => (dispatch) => {
    axios.delete(`https://water-my-plants-build.herokuapp.com/plants/${plantId}`)
        .then( res => {
            dispatch({type: DELETE_PLANT})
        })
        .catch(err => console.log(err))
}
