import {FETCHED_USER, RECEIVE_ERROR} from '../actions/type'

const initialState = {
    data : []
}
const fetchReducer = (state = initialState, action) =>
{

    console.log("hihhhihihi")
    switch(action.type)
    {
        case FETCHED_USER : {
            return{
                data : action.payload
            }
        };
        case RECEIVE_ERROR : 
        default : return state
        
    }
}
export default fetchReducer