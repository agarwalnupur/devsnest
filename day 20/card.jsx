
const Card = ({foodName , calories ,foodList, setFoodlist , item}) => {
    return(<div className = "card">
        <h2>{foodName}</h2>
        <span>you have consumed {calories} calories</span>
        <button onClick = {() => {
            const newArr = foodList.filter((el) => el !== item)
            setFoodlist(newArr);
        }}>Delete</button>
    </div>
    );
}

export default Card;