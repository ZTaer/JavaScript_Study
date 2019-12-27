import ModalTypes from "./modal.types";

const INITIAL_STATE = {
    showModal: false,
    text: '测试',
}

const modalReducer = ( state=INITIAL_STATE, action ) => {
    switch(action.type){
        case ModalTypes.HandleOpenModal:
            return {
                ...state,
                showModal: true,
                text: action.payload,
            }
        case ModalTypes.HandleCloseModal:
            return {
                ...state,
                showModal: false,
            } 
        default:
            return state;
    }
}

export default modalReducer;