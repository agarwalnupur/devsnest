// import { useCallback, useState } from 'react';


const Home = ({loggedIn , setLoggedin, handleChange}) => {

    handleChange = () => {
         setLoggedin(!loggedIn)
    }

    // const useToggle = (initialState = {loggedIn}) => 
    // {
    //     const [state, setState] = useState(initialState);
    //     const toggle = useCallback(() => setState(state => !state), []);
    //     console.log(state)
    //     return [state, toggle]
    // }

    // const [isTextChanged, setIsTextChanged] = useToggle();


    return (
    <div className= "home">
            <br/>
            <h1>Home Page </h1><br/>
            <h2>If not logged in cant access, Profile & Dashboard</h2>
            {/* <button onClick={setIsTextChanged}>{isTextChanged ? 'Logout' : 'Login'}</button> */}

            <button onClick = {handleChange}>{loggedIn ? "Logout" : "Login"}</button>
    </div>)

    
}

export default Home;