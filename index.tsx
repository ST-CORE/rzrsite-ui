import * as React from 'react'
import { Component } from 'react'
import './index.scss'
import ReactDOM from 'react-dom';



interface HelloProps {
  compiler: string;
  framework: string;
}

class HelloWorld extends Component<HelloProps, {}> {
  
  render() {
    return (<h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>)
}
}

function Button(props: any) {
    const handleClick = () => props.onClickFunction(props.increment);
      return (
        <button onClick={handleClick}>
        +{props.increment}
      </button>
    );
  }
  
  const Display = (props: any) : JSX.Element => {
        return ( 
          <div className="result">{props.message}</div>
        )
  }
  
  function App() {
      const [counter, setCounter] = React.useState(0);
      const incrementCounter = (incrementValue: number) => setCounter(counter+incrementValue);

    return (
      <div>
        <HelloWorld compiler="TypeScript" framework="React" />
        <Button onClickFunction={incrementCounter} increment={1} />
        <Button onClickFunction={incrementCounter} increment={5} />
        <Button onClickFunction={incrementCounter} increment={10} />
        <Button onClickFunction={incrementCounter} increment={100} />
        <Display message={counter} />
      </div>  
    );
  }






ReactDOM.render(<App />, document.getElementById('root'))