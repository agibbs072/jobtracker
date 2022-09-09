import React, {Component} from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

class App extends Component{
    render(){
        return (
            <div>
                <h1>Test</h1>
            </div>
        )
    }
}

root.render(<App />);