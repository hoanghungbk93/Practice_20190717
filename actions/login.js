import {LOGIN} from './type'

export const login = (userNames) =>
{
    return{
        type : LOGIN,
        payload : userNames
    }
}