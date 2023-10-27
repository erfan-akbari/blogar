import { useEffect, useReducer, useState } from "react";
import { typeReducer } from "../utils/typeReducer";
import validations from "../utils/validations";

const reducer = (state, action) => {
    switch (action.type) {
        case typeReducer.USERNAME_TYPE:
            return {
                ...state,
                userName: action.value,
                userNameIsValid: validations(action.value, typeReducer.USERNAME_TYPE)
            }
            break;
        case typeReducer.EMAIL_TYPE:
            return {
                ...state,
                email: action.value,
                emailIsValid: validations(action.value, typeReducer.EMAIL_TYPE)
            }
            break;
        case typeReducer.PASSWORD_TYPE:
            return {
                ...state,
                password: action.value,
                passwordIsValid: validations(action.value, typeReducer.PASSWORD_TYPE)
            }
            break;
        case typeReducer.CLEAR_TYPE:
            return {
                ...state,
                userName: '',
                email: '',
                password: '',
                userNameIsValid: validations('', typeReducer.USERNAME_TYPE),
                emailIsValid: validations('', typeReducer.EMAIL_TYPE),
                passwordIsValid: validations('', typeReducer.PASSWORD_TYPE)
            }
            break;
        default: return state
            break;
    }
}


function useForm(options) {

    const [state, dispatch] = useReducer(reducer, options)
    const [allFormValid, setAllFormValid] = useState(false)

    useEffect(() => {
        if (state.userNameIsValid && state.passwordIsValid) {
            setAllFormValid(true)
        } else {
            setAllFormValid(false)
        }
    }, [state])

    return [state, dispatch, allFormValid]

}

export default useForm