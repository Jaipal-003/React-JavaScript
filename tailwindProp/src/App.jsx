
import './App.css'

import Card from './component/card'

function App() {
  let myObj = {
    username: "Hitesh",
    age:21
  }

  let newArr = [
    1,2,3,4,5
  ]
  return (
    <>
<Card username="chaiorcode" btnText="Go Now" />
<Card  username="HiteshChoudary" btnText="click Now"/>
    </>
  )
}

export default App
