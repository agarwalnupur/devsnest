const PlaceDataReducer = (state = {} , action) => {
    if(action.type === "UPDATE_PLACEDATA")
        return action.payload;

    return state;

}

export default PlaceDataReducer;