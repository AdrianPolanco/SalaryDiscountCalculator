import IAction from "../interfaces/IAction";
import IFormData from "../interfaces/IFormData";

const formReducer = (state: IFormData, action: IAction): IFormData => {
    return {
        ...state,
        [action.name]: action.value,
    };
};

export default formReducer;
