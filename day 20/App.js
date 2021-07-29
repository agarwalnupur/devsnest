import './App.css';
import Card from './card';
import {useState} from 'react';

function App() {
  const [foodList, setFoodlist] = useState([
    {foodName : "pizza" , calories: "200"},
    {foodName : "pani puri" , calories: "500"},
    {foodName : "coke" , calories: "580"},
    {foodName : "burger" , calories: "341"},
    {foodName : "pasta" , calories: "786"},
    {foodName : "naan" , calories: "286"},
    {foodName : "momo" , calories: "652"},


  ])

  return (<>
    <h2>Calorie Read Only</h2>
    <div className="App">
     {foodList.length > 0 ? 
     foodList.map((item,index) => (
     <Card foodName = {item.foodName}
            calories = {item.calories}
            foodList = {foodList}
            setFoodlist = {setFoodlist}
            item = {item}
            key = {index}/>)):
     <h3>No items to display</h3>
     }

    </div>
    </>
  );
}

export default App;
