import { useState } from 'react';


const Button = () => {
    let [state, setState] = useState(0);
   let increment =() => {
     setState(state+1);
    }
    return(
        <span>
            <button onClick = {increment}>{state}</button>
        </span>
     );
}
export default Button;
