import React from "react";

class CountClass extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    setCount = () =>{
        let updatedCount = this.state.count;
        this.setState({count: updatedCount +1})
    }

    render() {
        return (
            <>
                <h1>Btn Click Count -- Class Component</h1>
                <span>Click Count {this.state.count}</span>
                <button onClick={this.setCount}>Add Count</button>
            </>
        )
    }

}

export default CountClass;