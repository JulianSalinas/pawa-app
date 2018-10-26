
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

// Agregar cada archivo de la carpeta reducers 
import MessagesReducer from './MessagesReducer'

// Combinar todos los reducer aquí 
const mainReducer = combineReducers({
    messages: MessagesReducer,
});

export default mainReducer;