import { useDispatch, useSelector } from "react-redux";
import { RemoveItem } from "../actions";

const ListTodo = () => {
    const dispatch = useDispatch() ;
    const todos = useSelector((state) => state.todo);
    return (<div>
        {todos.map((todo , index) =>
        <div>
            <input type="checkbox" ></input>
            <label style = {{display: "inline-block"}}>{todo.title}</label>
            <button onClick = {() => {
                dispatch(RemoveItem(index));
            }}>Delete</button>
        </div>
        )}
        
    </div>)
}

export default ListTodo;