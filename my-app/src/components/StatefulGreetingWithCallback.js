import React from "react";

class StatefulGreetingWithCallback extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }

    handleClick() {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        }, () => {
            // callback function is used
            // if you have code that must run after the setState function is called
            // make sure it goes in a callback function
            // this is because setState is asynchronous
        console.log("new state", this.state.introduction);
        console.log("new state", this.state.buttonText);
        });
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
    }

    render() {
        return (
        <div>
        <h1>{this.state.introduction} {this.props.greeting} My name is {this.props.name}</h1>
        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
        </div>
        )
    }

}

export default StatefulGreetingWithCallback;