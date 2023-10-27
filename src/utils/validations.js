import { typeReducer } from "./typeReducer"

function validations(value, type) {
    if (type === typeReducer.USERNAME_TYPE) {
        return (value.length < 8 || value.length > 20) ? false : true
    } else if (type === typeReducer.PASSWORD_TYPE) {
        return (value.length < 8 || value.length > 20) ? false : true
    } else if (type === typeReducer.EMAIL_TYPE) {
        return (value.length < 12) ? false : true
    }
}

export default validations;