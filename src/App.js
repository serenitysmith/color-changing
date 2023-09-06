
import {useState, useEffect} from 'react'

// changing thhe background color of body wit ract 
function App(){
  // setting the use state hook, to change the back ground olor of the page 
  const [color, setColor] = useState("blue")
  /// function for button to be funtional 
  const click = color  => {
    // this below doesnt change the color of the backgrond yet, just sets the variable color


setColor(color)
  }

    // below is the use effect hook that will actually chnage the color 
    useEffect(() => {
      // below is what acually changes the background 
    document.body.style.backgroundColor = color
      // below in brakcets is the color array varaible in whats called a dependacy array 
      // makes sure use effect is called every time the color changes
    
    }, [color])
  return(
    <div className="'App">
{/* // we want to change it on click so we create a button  */}
{/* // onclick is the event handler  */}
<button onClick={
  // pasing t eevent we want to happen on click
  () => click("yellow")
}>Change color</button>
<div> how to change backgrond color with react </div>

    </div>
  )
}
export default App;