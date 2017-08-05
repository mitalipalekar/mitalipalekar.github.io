import React from "react"
import ReactDOM from "react-dom"

// import Header from "../components/Header"

export default class Leadership extends React.Component {
  render() {
    return (
      <div>
        
        <div id="title">
          <span>LEADERSHIP</span>
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Leadership/>, app);