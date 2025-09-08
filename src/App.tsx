import { GreetingWithClass } from "./components/classComponent"
import { DontChangeThePropsExample, GreetingWithFunction } from "./components/functionalComponent"

// parent dari react
function App() {
  return (
    <div>
      <GreetingWithClass name="Taufik" email="userc@gmail.com" /> 
      <GreetingWithClass name="User B" />
      <GreetingWithClass name="User C" />
      <GreetingWithClass />

      <GreetingWithFunction name="Taufik" email="taufik@gmail.com" />      
      <GreetingWithFunction name="Taufik" email="taufik@gmail.com" /> 
      
      <DontChangeThePropsExample name="TestingHapus" age={30} address={{ street: '123 Main St', city: 'Wonderland', zip: '12345' }}/>       
    </div>
  )
}

export default App
