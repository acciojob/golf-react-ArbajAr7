import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { marginLeft: '0px' }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    };

    handleKeyDown(event) {
        if (event.key === "ArrowRight") {
            this.setState((prevState) => {
                const newLeft = parseInt(prevState.ballPosition.marginLeft, 10) + 5 + "px";
                console.log("previouspadding: ",prevState.ballPosition.marginLeft);
                console.log("newleft: ",newLeft);
                return { ballPosition: { marginLeft: newLeft } };
            });
        }
    }


    buttonClickHandler() {
        this.setState({ renderBall: true });
   
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button className="start" onClick={this.buttonClickHandler} >Start</button>
		}
    }

    // bind ArrowRight keydown event
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }
    // componentWillUnmount() {
    //     document.removeEventListener("keydown", this.handleKeyDown);
    // }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
