import React from "react"
import ReactDOM from "react-dom"

// import Header from "../components/Header"

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        
        <div id="title">
          <span>PROJECTS</span>
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Projects/>, app);