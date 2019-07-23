import {LOGIN} from '../actions/type'

const initialState = {
    userNames : ''
}
const loginReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case LOGIN : {
            return{
                userNames : action.payload
            }
        };
        default : return state
        
    }
}
export default loginReducer