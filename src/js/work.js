import React from "react"
import ReactDOM from "react-dom"

import Header from "./header.js"

class Work extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>HIII</h1>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Work/>, app);