import React from "react";
import ReactHook from "./ReactHook";

class ReactOld extends React.Component{
    constructor(props) {
        super(props);
        this.state = {  
          counter: 0
        };
      }
  render(){
    return(
<>

<ReactHook count = {this.state.counter}/>
        <div>

          
            <h2>React Old da  state yaratilishi</h2>
            <br />
            <br />
            <h2>React old state:{this.state.counter}</h2>
            <button onClick={()=>this.setState({counter:this.state.counter+1})}>+</button>
            <button onClick={()=>this.setState({counter:this.state.counter-1})}>-</button>
        </div>
</>
    )
  }


}

export default ReactOld;