import * as React from "react"
import { Component } from 'react'
import { render } from 'react-dom'
import './index.scss'


function Button(props) {
    const handleClick = () => props.onClickFunction(props.increment);
      return (
        <button onClick={handleClick}>
        +{props.increment}
      </button>
    );
  }
  
  function Display(props) {
      return (
        <div className="result">{props.message}</div>
  }
  
  function App() {
      const [counter, setCounter] = React.useState(0);
        <Button onClickFunction={incrementCounter} increment={1} />
        <Button onClickFunction={incrementCounter} increment={5} />
        <Button onClickFunction={incrementCounter} increment={10} />
        <Button onClickFunction={incrementCounter} increment={100} />
        <p><Display message={counter}/></p>
      </div>  
    );
  }


  interface HelloProps {
    compiler: string;
    framework: string;
  }

class HelloWorld extends Component<HelloProps> {
  render() {
    return (<h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>)
  }
}




render(<App />, document.getElementById('root'))