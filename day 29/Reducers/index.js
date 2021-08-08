import { combineReducers } from 'redux';
import PlaceDataReducer from './placeDataReducer';
import PlaceReducer from './placeReducer';

const RootReducer = combineReducers({
    placeData : PlaceDataReducer , 
    place : PlaceReducer
})

export default RootReducer;
