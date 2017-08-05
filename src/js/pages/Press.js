import React from "react"
import ReactDOM from "react-dom"

// import Header from "../components/Header"

export default class Press extends React.Component {
  render() {
    return (
      <div>
        
        <div id="title">
          <span>PRESS</span>
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Press/>, app);