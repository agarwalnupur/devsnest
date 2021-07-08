import Card from './components/card'

function App() {
  return (
    <div><br/>
    <h1>Today's Calorie Intake</h1>
    
    <div className="App">
      <Card food = "pixxa" cal = "266" />
      <Card food = "burger" cal = "346" />
      <Card food = "milkshake" cal = "200" />
      <Card food = "Coke" cal = "250" />
      <Card food = "Puchkaa" cal = "80" />
      <Card food = "Noodles" cal = "500" />
      <Card food = "Pasta" cal = "567" />
    </div>
    </div>
  );
}

export default App;
