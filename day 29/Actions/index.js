const updatePlace = (place) => {
    return {
        type : "UPDATE_PLACE" , 
        payload : place
    };
};

const updateplaceData = (place) => {
    return (dispatch) => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=b648fb4374964e87a5e54310210608&q=${place}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            dispatch({
                type: "UPDATE_PLACEDATA" ,
                payload: data,
            })
        })

    }
}

export {updatePlace , updateplaceData};
