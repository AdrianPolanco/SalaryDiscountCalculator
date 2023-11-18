import IAction from "../interfaces/IAction";
import IFormData from "../interfaces/IFormData";

const formReducer = (state: IFormData, action: IAction) => {
    return {
        ...state,
        [action.name]: action.value,
    };
};
