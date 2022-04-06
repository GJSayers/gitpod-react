import React from "react";


class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest!", 
            buttonText: "Login"

        };
       
    };

    handleClick() {
        this.setState((preState, preProps) => {
            console.log("Previous State:", preState);
            console.log("Previous Props:", preProps);
            return {
                message:
                    preState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                buttonText:
                    preState.buttonText === "Login" ? "Logout" : "Login",

            }
        })
    }


    render() {
        return (
            <div className="{css.NavBar}">
                <h1>My Gallery </h1>
                <span>{this.state.message}</span>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        );
    }
}

export default NavBarSimple;